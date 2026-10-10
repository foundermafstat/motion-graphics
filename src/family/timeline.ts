// Единый таймлайн ролика: все моменты — в кадрах от начала (30 fps)
export const FPS = 30;
const s = (sec: number) => Math.round(sec * FPS);

export const T = {
  // Settings → Apple Account → Family Sharing → Add Members
  tapAccount: s(3.2),
  p2: s(3.5),
  tapFamilySharing: s(5.3),
  p3: s(5.6),
  tapSetUp: s(7.6),
  p4: s(7.9),
  tapCreateChild: s(9.7),

  // Модальное окно «Create Child Account»
  sheetIn: s(10.0),
  tapContinue: s(11.9),
  cs2: s(12.2),
  kb1In: s(12.4),
  tapFirst: s(12.5),
  typeFirst: s(12.8),
  tapLast: s(13.4),
  typeLast: s(13.6),
  tapBirthday: s(15.0),
  kb1Out: s(15.0),
  birthdaySet: s(15.3),
  tapNext1: s(16.2),
  cs3: s(16.5),
  tapAgree: s(18.0),
  cs4: s(18.3),
  kb2In: s(18.4),
  tapEmail: s(18.5),
  typeEmail: s(18.8),
  tapPassword: s(20.3),
  typePassword: s(20.5),
  kb2Out: s(21.6),
  tapNext2: s(21.9),
  cs5: s(22.2),
  toggle1: s(23.0),
  toggle2: s(23.8),
  toggle3: s(24.6),
  toggle4: s(25.4),
  tapContinue2: s(26.6),
  cs6: s(26.9),
  tapDone: s(29.0),
  sheetOut: s(29.3),

  // Семья → ребёнок → Screen Time
  p5: s(29.0),
  emmaHighlight: s(29.9),
  tapEmma: s(31.6),
  p6: s(31.9),
  tapScreenTime: s(33.7),
  p7: s(34.0),
  tapDowntime: s(35.4),
  tapAppLimits: s(36.9),
  toggleCommSafety: s(38.4),
  tapContent: s(39.9),

  outro: s(41.6),
  end: s(45),
};

export const CHILD = {
  first: 'Emma',
  last: 'Appleseed',
  login: 'emma.appleseed',
  birthday: 'May 12, 2016',
  age: 10,
};

export type Caption = {at: number; step?: number; title: string; sub: string};

export const TOTAL_STEPS = 12;

export const CAPTIONS: Caption[] = [
  {at: 0, title: 'Family Sharing on iPhone', sub: 'Create a child account and set up parental controls'},
  {at: s(2.0), step: 1, title: 'Open Settings', sub: 'Tap your name at the top'},
  {at: T.p2, step: 2, title: 'Open Family Sharing', sub: 'It lives in your Apple Account'},
  {at: T.p3, step: 3, title: 'Set Up Your Family', sub: 'You become the family organizer'},
  {at: T.p4, step: 4, title: 'Create a Child Account', sub: 'For kids too young to sign up on their own'},
  {at: T.cs2, step: 5, title: 'Add Name & Birthday', sub: 'The birthday sets age-appropriate defaults'},
  {at: T.cs3, step: 6, title: 'Give Parental Consent', sub: 'Confirm you’re the parent or guardian'},
  {at: T.cs4, step: 7, title: 'Create Their Apple Account', sub: 'Pick an email address and a password'},
  {at: T.cs5, step: 8, title: 'Turn On Protections', sub: 'Content filters, Screen Time, Ask to Buy, location'},
  {at: T.cs6, step: 9, title: 'Welcome to the Family', sub: 'The child account is ready to use'},
  {at: T.sheetOut, step: 10, title: 'Open Your Child’s Settings', sub: 'Tap your child, then Screen Time'},
  {at: T.p7, step: 11, title: 'Set Downtime & App Limits', sub: 'Choose when and how long apps can be used'},
  {at: s(38.0), step: 12, title: 'Add Safety Filters', sub: 'Communication Safety and content restrictions'},
  {at: T.outro, title: 'You’re All Set', sub: 'Change anything later in Settings › Family'},
];
