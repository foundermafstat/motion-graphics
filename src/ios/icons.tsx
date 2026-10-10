import React from 'react';

type P = {size?: number; color?: string};

const Svg: React.FC<{size?: number; children: React.ReactNode}> = ({size = 20, children}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {children}
  </svg>
);

const line = (color: string, w = 2) => ({
  stroke: color,
  strokeWidth: w,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  fill: 'none',
});

export const Wifi: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <path d="M3 9.5a13 13 0 0 1 18 0" {...line(color, 2.4)} />
    <path d="M6.3 13a8.3 8.3 0 0 1 11.4 0" {...line(color, 2.4)} />
    <path d="M9.6 16.4a3.6 3.6 0 0 1 4.8 0" {...line(color, 2.4)} />
    <circle cx="12" cy="19.6" r="1.5" fill={color} />
  </Svg>
);

export const Bluetooth: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <path d="M7 7.5l10 9-5 4.5V3l5 4.5-10 9" {...line(color, 2)} />
  </Svg>
);

export const Cellular: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <rect x="4" y="15" width="3" height="5" rx="1" fill={color} />
    <rect x="8.5" y="12" width="3" height="8" rx="1" fill={color} />
    <rect x="13" y="8.5" width="3" height="11.5" rx="1" fill={color} />
    <rect x="17.5" y="5" width="3" height="15" rx="1" fill={color} />
  </Svg>
);

export const BatteryGlyph: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <rect x="2.5" y="7.5" width="17" height="9" rx="2.5" {...line(color, 1.6)} />
    <rect x="4.5" y="9.5" width="10" height="5" rx="1" fill={color} />
    <rect x="20.5" y="10.5" width="1.6" height="3" rx="0.8" fill={color} />
  </Svg>
);

export const Gear: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <rect key={i} x="10.6" y="2.2" width="2.8" height="5" rx="1" fill={color} transform={`rotate(${i * 45} 12 12)`} />
    ))}
    <circle cx="12" cy="12" r="5.2" stroke={color} strokeWidth="3.4" />
  </Svg>
);

export const Accessibility: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <circle cx="12" cy="12" r="9.5" {...line(color, 1.8)} />
    <circle cx="12" cy="7.6" r="1.6" fill={color} />
    <path d="M7.5 10h9M12 10v4.5M12 14.5l-2.5 4M12 14.5l2.5 4" {...line(color, 1.8)} />
  </Svg>
);

export const Camera: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <path
      fillRule="evenodd"
      fill={color}
      d="M4 8.5a2 2 0 0 1 2-2h2.2l1.4-2h4.8l1.4 2H18a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM12 9.1a3.6 3.6 0 1 0 0 7.2a3.6 3.6 0 1 0 0-7.2z"
    />
  </Svg>
);

export const Hourglass: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <path d="M6.5 3h11M6.5 21h11" {...line(color, 2)} />
    <path d="M8 3.5h8c0 4-4 5.5-4 8.5 0-3-4-4.5-4-8.5zM8 20.5h8c0-4-4-5.5-4-8.5 0 3-4 4.5-4 8.5z" fill={color} />
  </Svg>
);

export const Moon: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <path d="M14.5 3.2a8.8 8.8 0 1 0 6.3 13.9A7.3 7.3 0 0 1 14.5 3.2z" fill={color} />
  </Svg>
);

export const People: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <circle cx="9" cy="8" r="3.3" fill={color} />
    <path d="M2.8 19c0-3.6 2.8-6 6.2-6s6.2 2.4 6.2 6z" fill={color} />
    <circle cx="16.8" cy="8.8" r="2.7" fill={color} opacity="0.85" />
    <path d="M15.9 13.2c3-.3 5.4 1.8 5.4 5.3h-4.4c0-2-.3-3.7-1-5.3z" fill={color} opacity="0.85" />
  </Svg>
);

export const Person: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <circle cx="12" cy="8" r="3.8" fill={color} />
    <path d="M4.5 20c0-4.2 3.4-6.8 7.5-6.8s7.5 2.6 7.5 6.8z" fill={color} />
  </Svg>
);

export const PersonPlus: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <circle cx="10" cy="8" r="3.6" fill={color} />
    <path d="M3 20c0-4 3.1-6.6 7-6.6s7 2.6 7 6.6z" fill={color} />
    <path d="M19 7v6M16 10h6" {...line(color, 2)} />
  </Svg>
);

export const Lock: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <rect x="5.5" y="10.5" width="13" height="10" rx="2.2" fill={color} />
    <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" {...line(color, 2)} />
  </Svg>
);

export const Card: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <rect x="3" y="6" width="18" height="12.5" rx="2.2" fill={color} />
    <rect x="3" y="9" width="18" height="2.4" fill="rgba(0,0,0,0.28)" />
  </Svg>
);

export const Refresh: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <path d="M19 12a7 7 0 1 1-2.1-5" {...line(color, 2.2)} />
    <path d="M17.5 3.5v4h-4" {...line(color, 2.2)} />
  </Svg>
);

export const Cloud: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <path d="M7 18.5h10.3a4.2 4.2 0 0 0 .6-8.4A6 6 0 0 0 6.4 11 3.8 3.8 0 0 0 7 18.5z" fill={color} />
  </Svg>
);

export const LocationArrow: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <path d="M20.5 3.5 3.5 10.8l7.4 2.3 2.3 7.4z" fill={color} stroke={color} strokeLinejoin="round" strokeWidth="1" />
  </Svg>
);

export const FindMy: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <circle cx="12" cy="12" r="8.5" {...line(color, 2)} />
    <circle cx="12" cy="12" r="4.5" {...line(color, 2)} />
    <circle cx="12" cy="12" r="1.6" fill={color} />
  </Svg>
);

export const AppStore: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <path d="M8 19.5l6.8-13.3M16 19.5 9.2 6.2M5.5 15h13" {...line(color, 2.2)} />
  </Svg>
);

export const Cart: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <path d="M3 4h2.5l2.2 10.5h10.3l2-7.5H6.6" {...line(color, 2)} />
    <circle cx="9" cy="19" r="1.5" fill={color} />
    <circle cx="17" cy="19" r="1.5" fill={color} />
  </Svg>
);

export const CheckCircle: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <circle cx="12" cy="12" r="9" {...line(color, 2)} />
    <path d="M8 12.3l2.8 2.8L16.2 9.5" {...line(color, 2.2)} />
  </Svg>
);

export const Bubble: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <path
      d="M12 4c5 0 9 3.1 9 7s-4 7-9 7c-1 0-2-.1-2.9-.4L5 19.5l1.2-3.6C4.2 14.6 3 12.9 3 11c0-3.9 4-7 9-7z"
      fill={color}
    />
  </Svg>
);

export const Shield: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <path d="M12 2.8 19.5 6v5.4c0 4.6-3.1 8.4-7.5 9.8-4.4-1.4-7.5-5.2-7.5-9.8V6z" fill={color} />
  </Svg>
);

export const NoSign: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <circle cx="12" cy="12" r="8" {...line(color, 2.4)} />
    <path d="M6.4 6.4l11.2 11.2" {...line(color, 2.4)} />
  </Svg>
);

export const Distance: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <path d="M3 12h18M6.5 8.5 3 12l3.5 3.5M17.5 8.5 21 12l-3.5 3.5" {...line(color, 2)} />
  </Svg>
);

export const Plus: React.FC<P> = ({size, color = '#fff'}) => (
  <Svg size={size}>
    <path d="M12 5v14M5 12h14" {...line(color, 2.4)} />
  </Svg>
);

export const Magnifier: React.FC<P> = ({size = 18, color = '#000'}) => (
  <Svg size={size}>
    <circle cx="10.5" cy="10.5" r="6.5" {...line(color, 2.2)} />
    <path d="M15.5 15.5 20 20" {...line(color, 2.4)} />
  </Svg>
);

export const Mic: React.FC<P> = ({size = 18, color = '#000'}) => (
  <Svg size={size}>
    <rect x="9" y="3" width="6" height="11" rx="3" fill={color} />
    <path d="M6 11a6 6 0 0 0 12 0M12 17v4" {...line(color, 2)} />
  </Svg>
);

export const ChevronRight: React.FC<{color?: string}> = ({color = 'rgba(60, 60, 67, 0.3)'}) => (
  <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
    <path d="M1.5 1.5 7.5 7.5l-6 6" {...line(color, 2.2)} />
  </svg>
);

export const ChevronLeft: React.FC<{color?: string}> = ({color = '#000'}) => (
  <svg width="13" height="21" viewBox="0 0 13 21" fill="none">
    <path d="M10.5 2.5 2.5 10.5l8 8" {...line(color, 2.6)} />
  </svg>
);
