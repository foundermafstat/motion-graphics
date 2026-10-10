import React from 'react';
import {AbsoluteFill, interpolate, interpolateColors, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {clamp, ramp} from './anim';
import {ChevronLeft, ChevronRight, Magnifier, Mic} from './icons';
import {ios, STATUS_H} from './theme';

export const Page: React.FC<{children: React.ReactNode; bg?: string}> = ({children, bg = ios.bg}) => (
  <AbsoluteFill style={{background: bg, fontFamily: ios.font, color: ios.label}}>{children}</AbsoluteFill>
);

export const Spacer: React.FC<{h: number}> = ({h}) => <div style={{height: h, flexShrink: 0}} />;
export const Flex: React.FC = () => <div style={{flex: 1}} />;

// Касание: подсветка элемента + полупрозрачный «палец», который нажимает в кадре `at`
export const Tap: React.FC<{
  at?: number;
  children: React.ReactNode;
  x?: string;
  y?: string;
  radius?: number;
  highlight?: boolean;
  style?: React.CSSProperties;
}> = ({at, children, x = '50%', y = '50%', radius = 0, highlight = true, style}) => {
  const frame = useCurrentFrame();
  const t = at === undefined ? -1000 : frame - at;
  const finger = t >= -9 && t <= 14;
  const hl = highlight ? interpolate(t, [-1, 1, 6, 12], [0, 1, 1, 0], clamp) : 0;
  const opacity = interpolate(t, [-9, -4, 4, 14], [0, 1, 1, 0], clamp);
  const scale = interpolate(t, [-9, -4, 0, 3], [1.5, 1, 0.8, 0.9], clamp);
  return (
    <div style={{position: 'relative', ...style}}>
      {children}
      {hl > 0 && (
        <div style={{position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)', opacity: hl, borderRadius: radius}} />
      )}
      {finger && (
        <div
          style={{
            position: 'absolute',
            left: x,
            top: y,
            width: 40,
            height: 40,
            marginLeft: -20,
            marginTop: -20,
            borderRadius: 20,
            background: 'rgba(80, 80, 90, 0.35)',
            border: '2px solid rgba(255,255,255,0.95)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
            opacity,
            transform: `scale(${scale})`,
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
};

const glass: React.CSSProperties = {
  background: 'rgba(255,255,255,0.82)',
  boxShadow: '0 2px 10px rgba(0,0,0,0.08), inset 0 0 0 0.5px rgba(0,0,0,0.06)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const GlassCircle: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div style={{...glass, width: 44, height: 44, borderRadius: 22}}>{children}</div>
);

export const GlassPill: React.FC<{children: React.ReactNode; color?: string}> = ({children, color = ios.label}) => (
  <div style={{...glass, height: 44, padding: '0 18px', borderRadius: 22, fontSize: 17, fontWeight: 600, color}}>
    {children}
  </div>
);

export const BackButton: React.FC = () => (
  <GlassCircle>
    <div style={{marginRight: 2, display: 'flex'}}>
      <ChevronLeft />
    </div>
  </GlassCircle>
);

// Навбар страницы (top = высота статус-бара) или модального окна (top ≈ 8)
export const NavBar: React.FC<{
  back?: boolean;
  title?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  top?: number;
}> = ({back, title, left, right, top = STATUS_H}) => (
  <div style={{position: 'relative', height: top + 52, paddingTop: top, flexShrink: 0}}>
    {title && (
      <div style={{position: 'absolute', left: 0, right: 0, top, height: 52, lineHeight: '52px', textAlign: 'center', fontSize: 17, fontWeight: 600}}>
        {title}
      </div>
    )}
    <div style={{position: 'relative', height: 52, display: 'flex', alignItems: 'center', padding: '0 16px'}}>
      {back && <BackButton />}
      {left}
      <div style={{marginLeft: 'auto'}}>{right}</div>
    </div>
  </div>
);

export const LargeTitle: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div style={{fontSize: 34, fontWeight: 700, letterSpacing: 0.37, padding: '0 20px 12px', flexShrink: 0}}>{children}</div>
);

export const OnboardTitle: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div style={{fontSize: 28, fontWeight: 700, letterSpacing: 0.35, lineHeight: 1.15, textAlign: 'center', padding: '0 32px', flexShrink: 0}}>
    {children}
  </div>
);

export const Body: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div style={{fontSize: 16, lineHeight: 1.4, color: 'rgba(60,60,67,0.85)', textAlign: 'center', padding: '0 36px', flexShrink: 0}}>
    {children}
  </div>
);

export const Group: React.FC<{
  children: React.ReactNode;
  header?: string;
  footer?: string;
  inset?: number;
  cellBg?: string;
}> = ({children, header, footer, inset = 60, cellBg = ios.cell}) => {
  const items = React.Children.toArray(children);
  return (
    <div style={{margin: '0 16px', flexShrink: 0}}>
      {header && (
        <div style={{fontSize: 13, color: ios.secondary, padding: '0 20px 7px', textTransform: 'uppercase', letterSpacing: 0.2}}>
          {header}
        </div>
      )}
      <div style={{background: cellBg, borderRadius: 26, overflow: 'hidden'}}>
        {items.map((child, i) => (
          <React.Fragment key={i}>
            {child}
            {i < items.length - 1 && <div style={{height: 0.6, marginLeft: inset, background: ios.separator}} />}
          </React.Fragment>
        ))}
      </div>
      {footer && <div style={{fontSize: 13, lineHeight: 1.35, color: ios.secondary, padding: '7px 20px 0'}}>{footer}</div>}
    </div>
  );
};

export const Row: React.FC<{
  icon?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  detail?: React.ReactNode;
  accessory?: React.ReactNode;
  chevron?: boolean;
  height?: number;
}> = ({icon, title, subtitle, detail, accessory, chevron, height = 52}) => (
  <div style={{display: 'flex', alignItems: 'center', minHeight: height, padding: '0 16px'}}>
    {icon && <div style={{marginRight: 14, display: 'flex'}}>{icon}</div>}
    <div style={{flex: 1, minWidth: 0, padding: subtitle ? '9px 0' : 0}}>
      <div style={{fontSize: 17, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{title}</div>
      {subtitle && <div style={{fontSize: 13, color: ios.secondary, marginTop: 2}}>{subtitle}</div>}
    </div>
    {detail !== undefined && <div style={{fontSize: 17, color: ios.secondary, marginLeft: 8, whiteSpace: 'nowrap'}}>{detail}</div>}
    {accessory && <div style={{marginLeft: 8, display: 'flex'}}>{accessory}</div>}
    {chevron && (
      <div style={{marginLeft: 10, display: 'flex'}}>
        <ChevronRight />
      </div>
    )}
  </div>
);

export const IconSquare: React.FC<{color: string; children: React.ReactNode; size?: number}> = ({color, children, size = 30}) => (
  <div style={{width: size, height: size, borderRadius: size * 0.26, background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
    {children}
  </div>
);

export const IconCircle: React.FC<{colors: [string, string]; size: number; children: React.ReactNode}> = ({colors, size, children}) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      background: `linear-gradient(180deg, ${colors[0]}, ${colors[1]})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}
  >
    {children}
  </div>
);

export const Avatar: React.FC<{initials: string; size: number; colors?: [string, string]}> = ({initials, size, colors = ['#A5ABB8', '#858994']}) => (
  <IconCircle colors={colors} size={size}>
    <span style={{color: '#fff', fontSize: size * 0.4, fontWeight: 600, letterSpacing: 0.5}}>{initials}</span>
  </IconCircle>
);

// Тумблер; если задан at — переключается в этом кадре
export const Toggle: React.FC<{at?: number; initial?: boolean}> = ({at, initial = false}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = at === undefined ? 0 : spring({frame: Math.max(0, frame - at), fps, config: {damping: 16, stiffness: 220, mass: 0.6}});
  const p = initial ? 1 - s : s;
  return (
    <div
      style={{
        width: 51,
        height: 31,
        borderRadius: 16,
        background: interpolateColors(p, [0, 1], ['#E9E9EB', ios.green]),
        position: 'relative',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 2,
          left: 2 + 20 * p,
          width: 27,
          height: 27,
          borderRadius: 14,
          background: '#fff',
          boxShadow: '0 3px 8px rgba(0,0,0,0.15), 0 1px 1px rgba(0,0,0,0.16)',
        }}
      />
    </div>
  );
};

export const PrimaryButton: React.FC<{label: string; tapAt?: number}> = ({label, tapAt}) => (
  <div style={{padding: '0 24px', flexShrink: 0}}>
    <Tap at={tapAt} radius={26}>
      <div style={{height: 52, borderRadius: 26, background: ios.blue, color: '#fff', fontSize: 17, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {label}
      </div>
    </Tap>
  </div>
);

export const FieldRow: React.FC<{
  label: string;
  value: string;
  placeholder?: string;
  suffix?: string;
  active?: boolean;
}> = ({label, value, placeholder, suffix, active}) => {
  const frame = useCurrentFrame();
  const cursorOn = Math.floor(frame / 16) % 2 === 0;
  return (
    <div style={{display: 'flex', alignItems: 'center', height: 52, padding: '0 20px', fontSize: 17}}>
      <div style={{width: 92, flexShrink: 0}}>{label}</div>
      <div style={{flex: 1, display: 'flex', alignItems: 'center', whiteSpace: 'pre', minWidth: 0}}>
        {value && <span>{value}</span>}
        {active && <span style={{width: 2, height: 22, background: ios.blue, borderRadius: 1, marginLeft: 1, opacity: cursorOn ? 1 : 0}} />}
        {!value && placeholder && <span style={{color: ios.tertiary}}>{placeholder}</span>}
        {suffix && <span style={{color: ios.secondary}}>{suffix}</span>}
      </div>
    </div>
  );
};

// Смена значения в строке: старое уезжает вверх, новое приезжает снизу
export const Swap: React.FC<{at: number; from: string; to: string}> = ({at, from, to}) => {
  const frame = useCurrentFrame();
  const p = ramp(frame, at, 10);
  const flash = interpolate(frame, [at, at + 6, at + 30], [0, 1, 0], clamp);
  return (
    <span style={{display: 'inline-grid'}}>
      <span style={{gridArea: '1 / 1', textAlign: 'right', opacity: 1 - p, transform: `translateY(${-8 * p}px)`}}>{from}</span>
      <span
        style={{
          gridArea: '1 / 1',
          textAlign: 'right',
          opacity: p,
          transform: `translateY(${8 * (1 - p)}px)`,
          color: interpolateColors(flash, [0, 1], [ios.secondary, ios.blue]),
        }}
      >
        {to}
      </span>
    </span>
  );
};

// Мягкая голубая вспышка поверх элемента — «вот он, новый»
export const Pulse: React.FC<{at: number; children: React.ReactNode}> = ({at, children}) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [at, at + 8, at + 30, at + 45], [0, 1, 1, 0], clamp);
  return (
    <div style={{position: 'relative'}}>
      {children}
      <div style={{position: 'absolute', inset: 0, background: 'rgba(0,122,255,0.12)', opacity: o}} />
    </div>
  );
};

export const SearchField: React.FC = () => (
  <div style={{margin: '0 16px', height: 40, borderRadius: 20, background: ios.fill, display: 'flex', alignItems: 'center', padding: '0 12px', gap: 6, color: ios.secondary, fontSize: 17, flexShrink: 0}}>
    <Magnifier color={ios.secondary} />
    Search
    <div style={{marginLeft: 'auto', display: 'flex'}}>
      <Mic color={ios.secondary} />
    </div>
  </div>
);

export const Feature: React.FC<{icon: React.ReactNode; title: string; text: string}> = ({icon, title, text}) => (
  <div style={{display: 'flex', gap: 16, padding: '0 40px', marginBottom: 20, alignItems: 'flex-start', flexShrink: 0}}>
    <div style={{width: 36, display: 'flex', justifyContent: 'center', paddingTop: 2}}>{icon}</div>
    <div style={{flex: 1}}>
      <div style={{fontSize: 16, fontWeight: 600}}>{title}</div>
      <div style={{fontSize: 15, color: ios.secondary, lineHeight: 1.35, marginTop: 2}}>{text}</div>
    </div>
  </div>
);
