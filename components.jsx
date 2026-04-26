// === FACTORY BOARD, REACT COMPONENTS ===
const { useState, useEffect, useRef, useMemo } = React;

// ---------- ZONE ----------
function Zone({ zone, idx, total }) {
  return (
    <div className="zone" data-zone={zone.id} data-screen-label={`Zone ${zone.id}`}>
      <div className={`bottleneck-tag ${zone.bottleneck}`} title={zone.bottleneckNote}>
        ● {zone.bottleneck}
      </div>
      <div className="zone-header">
        <span className="zone-letter">{zone.id}</span>
        <span className="zone-name">
          {zone.name.split('\n').map((l, i) => <div key={i}>{l}</div>)}
        </span>
      </div>
      <div className="zone-body">
        <div style={{display:'flex', flexDirection:'column', gap:3}}>
          <div style={{
            fontFamily:"'IBM Plex Mono', monospace",
            fontSize: 8,
            letterSpacing: '0.12em',
            color: 'var(--blueprint)',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>{zone.stage}</div>
          <div className="hands-pill">{zone.hands.split('\n').join(' · ')}</div>
        </div>

        <div style={{display:'flex', flexDirection:'column', gap:1, marginTop:4}}>
          {zone.stats.map(([k, v], i) => (
            <div key={i} className="zone-stat"><span>{k}</span><span>{v}</span></div>
          ))}
        </div>

        <hr className="zone-divider" />

        <div className="photo-roll">
          {zone.photos.map((p, i) => (
            <div key={i} className="photo-frame">
              <div className="photo-thumb" data-num={p.num}></div>
              <div className="photo-cap">{p.cap}</div>
            </div>
          ))}
        </div>

        <div className="zone-flag">↳ {zone.flag}</div>
      </div>

      {idx < total - 1 && (
        <div className="flow-arrow">
          <svg viewBox="0 0 14 14">
            <line x1="0" y1="7" x2="11" y2="7" stroke="#1a1a1a" strokeWidth="1.2"/>
            <polyline points="7,3 11,7 7,11" fill="none" stroke="#1a1a1a" strokeWidth="1.2"/>
          </svg>
        </div>
      )}
    </div>
  );
}

// ---------- HUNG TAG (interactive: click to flip) ----------
function HungTag({ tag }) {
  const [flipped, setFlipped] = useState(!!tag.flip);
  return (
    <div
      className={`hung-tag ${flipped ? 'flip' : ''}`}
      style={{ left: tag.x, top: tag.y }}
      onClick={() => setFlipped(f => !f)}
      title="click to flip"
    >
      <span className="tag-num">{tag.num} · click to flip</span>
      <span className="tag-h">{tag.head}</span>
      <span className="tag-b">{tag.body}</span>
    </div>
  );
}

// ---------- LIFT FLAP ----------
function LiftFlap({ flap }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`flap ${open ? 'open' : ''}`}
      style={{ left: flap.x, top: flap.y, width: flap.w, height: flap.h }}
      onClick={() => setOpen(o => !o)}
    >
      <div className="flap-paper">
        {flap.front.map((l, i) => (
          <div key={i} style={{
            fontFamily: i === 1 ? "'Fraunces', serif" : "'IBM Plex Mono', monospace",
            fontSize: i === 1 ? 13 : 8.5,
            fontStyle: i === 1 ? 'italic' : 'normal',
            fontWeight: i === 1 ? 500 : 500,
            letterSpacing: i === 1 ? '-0.01em' : '0.12em',
            color: i === 0 ? 'var(--ink-faint)' : 'var(--ink)',
            textTransform: i === 0 ? 'uppercase' : 'none',
            lineHeight: 1.15,
          }}>{l}</div>
        ))}
      </div>
      <div className="flap-under">
        <div className="underline">{flap.under.line}</div>
        <div style={{fontSize: 8, lineHeight: 1.35, fontFamily: "'Inter', sans-serif"}}>{flap.under.body}</div>
      </div>
    </div>
  );
}

// ---------- PULL TAB ----------
function PullTab({ flap }) {
  const [pane, setPane] = useState(0);
  const next = (e) => {
    e.stopPropagation();
    setPane((p) => (p + 1) % flap.panes.length);
  };
  return (
    <div
      className="pulltab"
      style={{ left: flap.x, top: flap.y, width: flap.w, height: flap.h }}
      onClick={next}
    >
      <div className="pulltab-window">
        <div className="pulltab-track" style={{ transform: `translateX(-${pane * 100}%)` }}>
          {flap.panes.map((lines, i) => (
            <div key={i} className="pulltab-pane">
              {lines.map((l, j) => (
                <div key={j} style={{
                  fontFamily: j === 1 ? "'Fraunces', serif" : "'IBM Plex Mono', monospace",
                  fontSize: j === 1 ? 13 : 8.5,
                  fontStyle: j === 1 ? 'italic' : 'normal',
                  fontWeight: 500,
                  letterSpacing: j === 1 ? '-0.01em' : '0.1em',
                  color: j === 0 ? 'var(--ink-faint)' : 'var(--ink)',
                  textTransform: j === 0 ? 'uppercase' : 'none',
                  lineHeight: 1.2,
                }}>{l}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="pulltab-handle">PULL »</div>
    </div>
  );
}

// ---------- THREAD OVERLAY ----------
// curved bezier through pin points; cost threads anchor to cost-bearing zones,
// hands threads anchor to every zone's hands pill
function ThreadOverlay({ pins }) {
  // pins: { cost: [{x,y,zone}], hands: [{x,y,zone}] }
  const drawPath = (pts) => {
    if (pts.length < 2) return '';
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i-1], cur = pts[i];
      const mx = (prev.x + cur.x) / 2;
      const cpY = Math.min(prev.y, cur.y) - 30 - (i % 2) * 18;
      d += ` Q ${mx} ${cpY} ${cur.x} ${cur.y}`;
    }
    return d;
  };

  return (
    <div className="thread-layer">
      <svg viewBox="0 0 1728 1296" preserveAspectRatio="none">
        {/* COST THREAD, terracotta, flows under zones, follows fabric→accessory path */}
        <path className="thread thread-cost" d={drawPath(pins.cost)} stroke="#b04a2f" />
        {/* HANDS THREAD, blueprint, runs above with dashed style */}
        <path className="thread thread-hands dashed" d={drawPath(pins.hands)} stroke="#1f3a5f" />

        {/* PINS */}
        {pins.cost.map((p, i) => (
          <g key={`c${i}`}>
            <circle cx={p.x} cy={p.y} r="3" className="pin" />
            <circle cx={p.x} cy={p.y} r="5" className="pin-head" />
          </g>
        ))}
        {pins.hands.map((p, i) => (
          <g key={`h${i}`}>
            <circle cx={p.x} cy={p.y} r="3" className="pin" />
            <circle cx={p.x} cy={p.y} r="5" className="pin-head hands" />
          </g>
        ))}
      </svg>
    </div>
  );
}

Object.assign(window, { Zone, HungTag, LiftFlap, PullTab, ThreadOverlay });
