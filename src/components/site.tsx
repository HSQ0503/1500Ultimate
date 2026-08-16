"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bookmark,
  BookOpen,
  Bot,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock3,
  Filter,
  Flame,
  Grid2X2,
  Highlighter,
  Home,
  LockKeyhole,
  Menu,
  MessageCircle,
  MoreHorizontal,
  PanelLeft,
  Play,
  Plus,
  Search,
  Send,
  Sparkles,
  Sun,
  Target,
  Timer,
  TrendingUp,
  UserRound,
  X,
  Zap,
} from "lucide-react";
import {
  canAccess,
  parsePlan,
  planLimits,
  pricingTarget,
  type Plan,
} from "@/lib/entitlements";

type SiteProps = {
  path: string;
  planQuery?: string;
  explained: boolean;
  highlight?: string;
};

const appRoutes = new Set([
  "/",
  "/ask-scott",
  "/planner",
  "/masterclass/rw",
  "/masterclass/math",
  "/bank",
  "/bank/math",
  "/bank/run",
  "/rush",
  "/challenges",
  "/tests",
]);

function planHref(href: string, plan: Plan) {
  if (plan === "pro") return href;
  return `${href}${href.includes("?") ? "&" : "?"}plan=${plan}`;
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`logo ${compact ? "logo-compact" : ""}`}>
      <span className="logo-mark" aria-hidden="true">
        <span />
      </span>
      <span>
        <strong>1500 SAT Blueprint</strong>
        {!compact && <small>by Scott Robinson</small>}
      </span>
    </div>
  );
}

const navSections = [
  {
    items: [
      { href: "/", label: "Home", icon: Home },
      { href: "/ask-scott", label: "Ask Scott", icon: MessageCircle },
      { href: "/planner", label: "Study Planner", icon: CalendarDays },
    ],
  },
  {
    title: "Masterclass",
    items: [
      {
        href: "/masterclass/rw",
        label: "Reading & Writing",
        icon: Menu,
        chip: "NEW",
      },
      { href: "/masterclass/math", label: "Math", icon: Plus, chip: "NEW" },
    ],
  },
  {
    title: "Practice",
    items: [
      { href: "/bank", label: "Question Bank", icon: Grid2X2 },
      { href: "/rush", label: "Question Rush", icon: Timer },
      { href: "/challenges", label: "Challenge Questions", icon: Target },
      { href: "/tests", label: "Full-Length Tests", icon: BookOpen },
    ],
  },
];

function Rail({ path, plan }: { path: string; plan: Plan }) {
  const active = (href: string) =>
    href === "/" ? path === "/" : path.startsWith(href);

  return (
    <aside className="rail">
      <Link href={planHref("/", plan)} className="rail-logo">
        <Logo />
      </Link>
      <div className="exam-switcher" aria-label="Exam">
        <span className="selected">SAT</span>
        <span>ACT</span>
        <span>AP</span>
        <span>IB</span>
      </div>
      <nav className="rail-nav">
        {navSections.map((section, index) => (
          <div className="nav-section" key={section.title ?? index}>
            {section.title && <p>{section.title}</p>}
            {section.items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  className={active(item.href) ? "active" : ""}
                  href={planHref(item.href, plan)}
                  key={item.href}
                >
                  <Icon size={14} strokeWidth={1.8} />
                  <span>{item.label}</span>
                  {"chip" in item && item.chip && (
                    <em className="new-chip">{item.chip}</em>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>
      <div className="rail-footer">
        <Link href={planHref("/pricing", plan)}>
          <TrendingUp size={14} />
          <span>Upgrade</span>
          <em className="pro-chip">PRO</em>
        </Link>
        <Link href="#book-scott" className="book-scott">
          <UserRound size={14} />
          <span>Book Scott</span>
        </Link>
        <div className="profile">
          <span className="avatar">AC</span>
          <span>Alex Chen</span>
          <Sun size={14} />
        </div>
      </div>
    </aside>
  );
}

function AppShell({
  path,
  plan,
  children,
  flush = false,
}: {
  path: string;
  plan: Plan;
  children: React.ReactNode;
  flush?: boolean;
}) {
  return (
    <div className="app-shell">
      <Rail path={path} plan={plan} />
      <main className={`app-main ${flush ? "flush" : ""}`}>{children}</main>
    </div>
  );
}

function SearchBar() {
  return (
    <label className="search">
      <Search size={15} />
      <input aria-label="Search questions" placeholder="Search questions" />
    </label>
  );
}

function TopSignals() {
  return (
    <div className="top-signals">
      <span>
        <Flame size={13} fill="currentColor" /> 3
      </span>
      <span>
        <i /> 12
      </span>
    </div>
  );
}

function PageTop({ children }: { children?: React.ReactNode }) {
  return (
    <div className="page-top">
      {children ?? <SearchBar />}
      <TopSignals />
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
  action,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
  action?: string;
}) {
  return (
    <div className="stat-card">
      <small>{label}</small>
      <strong>{value}</strong>
      {action && <button>{action}</button>}
      {icon && <span className="stat-icon">{icon}</span>}
    </div>
  );
}

function Bullseye({ large = false }: { large?: boolean }) {
  return (
    <span className={`bullseye ${large ? "large" : ""}`} aria-hidden="true">
      <i>
        <b />
      </i>
    </span>
  );
}

function Login() {
  return (
    <main className="login-page">
      <section className="login-form">
        <Logo compact />
        <div className="login-box">
          <h1>Sign in</h1>
          <div className="oauth-grid">
            <button>
              <span className="google">G</span>
              Google
            </button>
            <button>
              <span className="apple">●</span>
              Apple
            </button>
            <button>
              <span className="microsoft">
                <i />
                <i />
                <i />
                <i />
              </span>
              Microsoft
            </button>
          </div>
          <div className="or"><span>or</span></div>
          <label className="email-label">
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <Link href="/" className="black-button">
            Continue with email
          </Link>
          <p className="signup-copy">
            Don’t have an account? <button>Sign up</button>
          </p>
        </div>
      </section>
      <section className="login-art" aria-label="A path toward a 1500 target">
        <span className="star s1" />
        <span className="star s2" />
        <span className="star s3" />
        <span className="star s4" />
        <div className="mountain m1" />
        <div className="mountain m2" />
        <div className="mountain m3" />
        <div className="hill back" />
        <div className="hill front" />
        <div className="art-target">
          <Bullseye large />
        </div>
        <div className="sign">
          <span>1500 ↑</span>
          <i />
        </div>
        <div className="backpack">
          <i />
          <b />
        </div>
      </section>
    </main>
  );
}

function ProStrip({ plan }: { plan: Plan }) {
  return (
    <div className="pro-strip">
      <span>Blueprint Pro · Masterclass + all 6 tests</span>
      <Link href={planHref("/pricing?highlight=pro", plan)}>
        See plans <ArrowRight size={12} />
      </Link>
    </div>
  );
}

function HomePage({ plan }: { plan: Plan }) {
  return (
    <AppShell path="/" plan={plan} flush>
      <ProStrip plan={plan} />
      <div className="page-pad home-page">
        <PageTop />
        <div className="home-grid">
          <div>
            <h1>Good evening, Alex</h1>
            <section className="create-plan-card">
              <div className="plan-dots">
                <i />
                <i />
                <i />
                <i />
              </div>
              <h2>Create a study plan.</h2>
              <p>Get a plan from your test date and last diagnostic.</p>
              <Link href={planHref("/planner", plan)} className="electric-button">
                Create my study plan
              </Link>
            </section>
            <div className="stats-grid home-stats">
              <StatCard label="Attempted" value="86" />
              <StatCard label="Accuracy" value="71%" />
              <StatCard label="Saved" value="4" />
              <StatCard label="Recent errors" value="12" />
            </div>
          </div>
          <aside className="home-side">
            <section className="countdown-card">
              <small>Your next SAT</small>
              <strong>6 days 06 hrs</strong>
              <span>Saturday, August 22</span>
              <button>Switch test date</button>
            </section>
            <section className="score-card">
              <div>
                <strong>1320</strong>
                <small>Starting</small>
              </div>
              <div>
                <strong>1500</strong>
                <small>Goal</small>
              </div>
              <Bullseye />
            </section>
            <section className="upsell-card">
              <h3>Reach 1500 faster with Pro.</h3>
              <ul>
                <li>Masterclass for R&amp;W and Math</li>
                <li>All 6 full-length tests</li>
                <li>Priority plans from Scott</li>
              </ul>
              <Link href={planHref("/pricing?highlight=pro", plan)}>
                View plans <ArrowRight size={12} />
              </Link>
            </section>
          </aside>
        </div>
      </div>
    </AppShell>
  );
}

function AskScott({ plan }: { plan: Plan }) {
  return (
    <AppShell path="/ask-scott" plan={plan} flush>
      <div className="chat-layout">
        <aside className="chat-history">
          <button className="electric-button">
            <Plus size={15} /> New chat
          </button>
          {[
            "SAT is Saturday",
            "Desmos for circles",
            "Comma splice in RW",
            "How to pace Module 2",
          ].map((chat) => (
            <button key={chat}>{chat}</button>
          ))}
        </aside>
        <section className="chat-empty">
          <div className="chat-center">
            <Bullseye />
            <h1>Ask me anything about SAT prep.</h1>
            <div className="prompt-list">
              <button><b>Quiz me</b> on Heart of Algebra <ChevronRight /></button>
              <button><b>Explain</b> how to pace Module 2 <ChevronRight /></button>
              <button><b>Walk through</b> a comma splice in R&amp;W <ChevronRight /></button>
              <button><b>When should I</b> use Desmos for circles? <ChevronRight /></button>
              <button><b>How do I read</b> Command of Evidence? <ChevronRight /></button>
            </div>
          </div>
          <div className="chat-composer">
            <input aria-label="Ask Scott" placeholder="Ask Scott anything…" />
            <button aria-label="Send"><Send size={15} /></button>
            <small>Scott can make mistakes.</small>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

const planRows = [
  ["Mon 17", "Heart of Algebra", "Math", "22 min / 8 q"],
  ["Tue 18", "Transitions", "R&W", "18 min / 6 q"],
  ["Wed 19", "Circles", "Geometry", "24 min / 7 q"],
  ["Thu 20", "Command of Evidence", "", "20 min / 6 q"],
];

function Planner({ plan }: { plan: Plan }) {
  return (
    <AppShell path="/planner" plan={plan}>
      <div className="planner-banner">
        <span>Test day is <b>Saturday, August 22.</b></span>
        <button>Retune plan</button>
      </div>
      <section className="planner-page">
        <header className="planner-title">
          <div>
            <h1><CalendarDays /> My Study Plan</h1>
            <span>Week 1 of 8</span>
            <strong>Aug 16 to 22</strong>
          </div>
          <div>
            <button className="white-pill">Options</button>
            <span>
              <button aria-label="Previous week"><ChevronLeft /></button>
              <button aria-label="Next week"><ChevronRight /></button>
            </span>
          </div>
        </header>
        <div className="planner-list">
          {planRows.map(([day, title, category, meta]) => (
            <div className="planner-row" key={day}>
              <span className="day">{day}</span>
              <i className="empty-check" />
              <div>
                <strong>{title} {category && <span>({category})</span>}</strong>
                <small>{meta}</small>
              </div>
              <button className="electric-button">Start</button>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}

function InstructorCard() {
  return (
    <aside className="instructor-card">
      <h3>Meet your instructor</h3>
      <div className="instructor-avatar"><span>SR</span></div>
      <strong>Scott Robinson</strong>
      <a>1580 SAT · Georgia Tech</a>
      <p>He built 1500 SAT Blueprint from the methods he uses with students — short lessons, then the same skill in the bank.</p>
    </aside>
  );
}

function CoursePage({ kind, plan }: { kind: "rw" | "math"; plan: Plan }) {
  const isMath = kind === "math";
  return (
    <AppShell path={`/masterclass/${kind}`} plan={plan} flush>
      <section className={`course-hero ${isMath ? "math" : "rw"}`}>
        <Link href={planHref("/", plan)}><ChevronLeft /> Back to courses</Link>
        <h1>{isMath ? "SAT Math & Desmos Masterclass" : "SAT Reading & Writing Masterclass"}</h1>
        <div className={`course-art ${isMath ? "triangle" : "pages"}`} />
        <div className="course-tabs">
          <button className="active"><PanelLeft /> Overview</button>
          <button><Menu /> Syllabus</button>
        </div>
      </section>
      <section className="course-body">
        <div className="course-copy">
          <h2>Course overview</h2>
          {isMath ? (
            <>
              <p>This is SAT Math with Desmos. How to set the problem up, when the calculator actually helps, and which skills move a 1320 toward 1500.</p>
              <p>Scott walks the question types that show up every test: linear, quadratic, circles, and the word problems that eat the clock.</p>
              <p>The first lessons are open. The rest of the course is Pro.</p>
            </>
          ) : (
            <>
              <p>This is the SAT Reading &amp; Writing course. Short lessons, then you drill the same skill in the Question Bank.</p>
              <p>Scott teaches a tight method for passages, grammar as a small set of rules, and how to stop leaking points on transitions, punctuation, and rhetorical synthesis.</p>
              <p>The first lessons are open. The rest of the syllabus is Pro.</p>
            </>
          )}
        </div>
        <InstructorCard />
      </section>
      <div className="course-cta">
        <span>Unlock the full course with Pro.</span>
        <button>View syllabus</button>
        <Link href={planHref("/pricing?highlight=pro", plan)}>Upgrade</Link>
      </div>
    </AppShell>
  );
}

function BookArt() {
  return (
    <div className="book-art" aria-hidden="true">
      <span className="book-page left"><i /><i /><i /></span>
      <span className="book-page right"><i /><i /><i /></span>
      <b />
    </div>
  );
}

function MathArt() {
  return (
    <div className="math-art" aria-hidden="true">
      <span className="set-square" />
      <span className="protractor" />
      <b />
      <i />
    </div>
  );
}

function SubjectCard({
  type,
  title,
  subtitle,
  button = "Open",
  href,
  plan,
}: {
  type: "rw" | "math";
  title: string;
  subtitle: string;
  button?: string;
  href: string;
  plan: Plan;
}) {
  return (
    <section className={`subject-card ${type}`}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Link href={planHref(href, plan)}>
        {button} <ChevronRight size={13} />
      </Link>
      {type === "rw" ? <BookArt /> : <MathArt />}
    </section>
  );
}

function Bank({ plan }: { plan: Plan }) {
  const limit = planLimits(plan).bankQuestions;
  return (
    <AppShell path="/bank" plan={plan}>
      <PageTop />
      <header className="icon-title"><BookOpen /> <h1>Question Bank</h1></header>
      <div className="subject-grid">
        <SubjectCard type="rw" title="Reading & Writing" subtitle={`12 of ${limit === "All" ? "1,492" : "200"} solved   1%`} href="/bank" plan={plan} />
        <SubjectCard type="math" title="Math" subtitle={`40 of ${limit === "All" ? "2,390" : "200"} solved   2%`} href="/bank/math" plan={plan} />
      </div>
      <div className="section-label">
        <span><BarChart3 /> Question Analytics</span>
        <button>View all analytics <ChevronRight /></button>
      </div>
      <div className="stats-grid analytics">
        <StatCard label="Attempted" value="86" icon={<Check />} />
        <StatCard label="Accuracy" value="71%" icon={<BarChart3 />} />
        <StatCard label="Saved" value="4" action="View saved" icon={<Bookmark />} />
        <StatCard label="Streak" value="3" icon={<Flame />} />
      </div>
      <div className="activity-fade"><TrendingUp /> Activity trend · last 14 days</div>
    </AppShell>
  );
}

function InfoBanner({
  title,
  text,
}: {
  title: string;
  text: React.ReactNode;
}) {
  return (
    <section className="info-banner">
      <span><Bullseye /></span>
      <div><strong>{title}</strong><p>{text}</p></div>
    </section>
  );
}

function Rush({ plan }: { plan: Plan }) {
  return (
    <AppShell path="/rush" plan={plan}>
      <header className="icon-title"><Zap /> <h1>Question Rush</h1></header>
      <InfoBanner title="What is Question Rush?" text="A timed drill against the clock. Short sets, instant feedback — built to raise pace without dropping accuracy." />
      <div className="subject-grid rush-cards">
        <SubjectCard type="rw" title="Reading & Writing" subtitle="1,492 questions" button="Continue" href="/bank/run" plan={plan} />
        <SubjectCard type="math" title="Math" subtitle="2,390 questions" button="Continue" href="/bank/run" plan={plan} />
      </div>
      <div className="section-label simple"><span><Clock3 /> Recent session</span></div>
      <div className="recent-session">
        <div><strong>Reading &amp; Writing</strong><small>Today · Module mix</small></div>
        <span>8 q</span><span>4 min</span><span>75%</span><span><Flame /> 3 streak</span>
        <button>Review <ChevronRight /></button>
      </div>
    </AppShell>
  );
}

function Challenges({ plan }: { plan: Plan }) {
  return (
    <AppShell path="/challenges" plan={plan}>
      <header className="icon-title"><Target /> <h1>Challenge Questions</h1></header>
      <InfoBanner title="What are Challenge Questions?" text="The hard Module 2 questions that separate a 1400 from a 1500." />
      <div className="subject-grid challenge-cards">
        <SubjectCard type="rw" title="Reading & Writing" subtitle="277 questions" href="/bank/run" plan={plan} />
        <SubjectCard type="math" title="Math" subtitle="75 questions" href="/bank/run" plan={plan} />
      </div>
      <div className="section-label">
        <span><BarChart3 /> Challenge analytics</span>
        <button>View all analytics <ChevronRight /></button>
      </div>
      <div className="stats-grid analytics">
        <StatCard label="Attempted" value="20" icon={<Target />} />
        <StatCard label="Accuracy" value="55%" icon={<BarChart3 />} />
        <StatCard label="Correct" value="11" icon={<Check />} />
        <StatCard label="Time" value="42m" icon={<Clock3 />} />
      </div>
    </AppShell>
  );
}

const testData = [
  ["Test 1", "Start", "Section 1", "32:00"],
  ["Test 2", "Resume", "Section 2", "18:40"],
  ["Test 3", "Start", "Section 1", "32:00"],
  ["Test 4", "Resume", "Section 2", "27:12"],
];

function Tests({ plan }: { plan: Plan }) {
  const included = planLimits(plan).tests;
  return (
    <AppShell path="/tests" plan={plan}>
      <header className="icon-title"><BookOpen /> <h1>Full-length tests</h1></header>
      <InfoBanner
        title="Blueprint test disclaimer"
        text={<>Calibrated to the recent Digital SAT. <strong>Harder</strong> than the Bluebook sample — expect a tougher Module 2. Six tests in the set; four shown here.</>}
      />
      <div className="test-grid">
        {testData.map(([title, action, section, time], index) => {
          const unlocked = index < included;
          return (
            <section className="test-card" key={title}>
              <div className={`test-preview ${index === 2 ? "gold" : ""}`}>
                <span data-section={section} data-time={time}><i /><i /><i /><b /></span>
              </div>
              <div className="test-card-body">
                <h2>{title}</h2>
                <div className="test-badges">
                  <span>Hard</span>
                  {index > 0 && <em>Pro</em>}
                </div>
                {unlocked ? (
                  <button>{action}</button>
                ) : (
                  <Link href={planHref(`/pricing?highlight=${plan === "free" ? "blueprint" : "pro"}`, plan)}>
                    <LockKeyhole /> Unlock
                  </Link>
                )}
                <button className="more"><MoreHorizontal /></button>
              </div>
            </section>
          );
        })}
      </div>
    </AppShell>
  );
}

const skills = [
  ["Algebra", "", ""],
  ["Linear equations in one variable", "16/159", "100%"],
  ["Linear functions", "85/225", "86%"],
  ["Linear equations in two variables", "42/180", "85%"],
  ["Systems of two linear equations", "0/98", "—"],
  ["Linear inequalities in one or two variables", "12/70", "75%"],
  ["Advanced Math", "", ""],
  ["Equivalent expressions", "8/140", "62%"],
  ["Nonlinear equations in one variable", "4/110", "50%"],
];

function BankMath({ plan }: { plan: Plan }) {
  const [filtersOpen, setFiltersOpen] = useState(false);
  return (
    <AppShell path="/bank/math" plan={plan}>
      <div className={`bank-math ${filtersOpen ? "filters-open" : ""}`}>
        <div className="bank-heading">
          <div>
            <Link href={planHref("/bank", plan)}><ChevronLeft /> Back to Question Bank</Link>
            <h1>Math</h1>
          </div>
          <button className="white-pill"><MoreHorizontal /> More options</button>
        </div>
        <div className="filter-row">
          <button><BarChart3 /> Difficulty <ChevronDown /></button>
          <button><CheckCircle2 /> Completed <ChevronDown /></button>
          <button
            className={filtersOpen ? "open" : ""}
            onClick={() => setFiltersOpen((value) => !value)}
          >
            <Filter /> Filters <ChevronDown />
          </button>
          {filtersOpen && (
            <div className="filter-menu">
              <button><Grid2X2 /> Question set</button>
              <button><Clock3 /> Time spent</button>
              <button><Bookmark /> Saved</button>
              <button><Target /> Result</button>
            </div>
          )}
        </div>
        <section className="practice-all">
          <div><strong>Practice all topics</strong><p>Start practicing all 19 skills in Math.</p></div>
          <Link href={planHref("/bank/run", plan)}>Start practice</Link>
        </section>
        <div className="skills-head"><span>Topic</span><span>Progress</span><span>Accuracy</span></div>
        <div className="skills-list">
          {skills.map(([name, progress, accuracy], index) =>
            !progress ? (
              <h3 key={name}>{name}</h3>
            ) : (
              <Link href={planHref("/bank/run", plan)} className="skill-row" key={name}>
                <i className="empty-check" />
                <span>{name}</span>
                <span className="progress"><b style={{ width: `${Math.max(4, 36 - index * 3)}px` }} /></span>
                <small>{progress}</small>
                <em className={accuracy === "100%" ? "green" : accuracy === "50%" ? "red" : accuracy === "—" ? "muted" : "orange"}>
                  <i />{accuracy}
                </em>
              </Link>
            )
          )}
        </div>
      </div>
    </AppShell>
  );
}

function AnswerTable({
  values,
}: {
  values: [number, number][];
}) {
  return (
    <table>
      <thead><tr><th><i>x</i></th><th><i>y</i></th></tr></thead>
      <tbody>{values.map(([x, y]) => <tr key={x}><td>{x}</td><td>{y}</td></tr>)}</tbody>
    </table>
  );
}

function Runner({ plan, explained }: { plan: Plan; explained: boolean }) {
  const router = useRouter();
  const showExplained = () =>
    router.push(planHref("/bank/run?explained=1", plan));
  return (
    <div className={`runner ${explained ? "explained" : ""}`}>
      <header className="runner-top">
        <button><ArrowLeft /> Go back</button>
        <button>Directions <ChevronDown /></button>
        <div><strong>00:42</strong><small>Ⅱ Pause · Hide</small></div>
        <nav>
          <button><Highlighter />Highlight</button>
          <button><Grid2X2 />Calculator</button>
          <button><BookOpen />Reference</button>
          <button><MoreHorizontal />More</button>
        </nav>
      </header>
      <main className="question-area">
        <section className="question-content">
          <div className="question-meta">
            <b>6</b>
            <button><Bookmark /> Mark for Review</button>
            <button><Target /> Report</button>
          </div>
          <p className="eyebrow">Math · Algebra — Linear equations</p>
          <h1>An elevator is located 5 floors below ground level (floor −5) and rises at a constant rate of 4 floors per minute. The equation <i>y</i> = 4<i>x</i> − 5 gives the floor <i>y</i> the elevator is on after <i>x</i> minutes. Which table shows three values of <i>x</i> and their corresponding values of <i>y</i> according to the given equation?</h1>
          <div className="answers">
            <div className={`answer ${explained ? "wrong" : ""}`}>
              <span>A</span>
              {explained && <b className="wrong-x"><X /></b>}
              <AnswerTable values={[[0, -4], [1, 1], [2, 6]]} />
              {explained && <button onClick={showExplained}>Explain</button>}
              {explained && (
                <div className="scott-note">
                  <strong><Bot /> Scott</strong>
                  <p>This table uses the wrong starting floor and a different rate.</p>
                  <button onClick={showExplained}>View explanation</button>
                </div>
              )}
            </div>
            <div className="answer">
              <span>B</span>
              <AnswerTable values={[[0, -5], [1, -1], [2, 3]]} />
            </div>
            <div className="answer">
              <span>C</span>
              <AnswerTable values={[[0, -5], [1, -9], [2, -13]]} />
            </div>
            <div className="answer">
              <span>D</span>
              <AnswerTable values={[[0, 5], [1, 9], [2, 13]]} />
            </div>
          </div>
        </section>
        {explained && (
          <aside className="explanation-panel">
            <header><label><i /> Pin</label><button><X /></button></header>
            <nav><button>Ask Scott</button><button className="active">Explanation</button><button>Info</button></nav>
            <section className="correct-answer">
              <strong><Check /> Correct answer</strong>
              <div><b>B</b><AnswerTable values={[[0, -5], [1, -1], [2, 3]]} /></div>
            </section>
            <h3>Step-by-step</h3>
            <p>Choose a solution method</p>
            <section className="method">
              <small>METHOD 1</small>
              <strong>Substitute values</strong>
              <p>Plug <i>x</i> = 0, 1, and 2 into <i>y</i> = 4<i>x</i> − 5 to build the table.</p>
            </section>
            <section className="method">
              <small>METHOD 2</small>
              <strong>Use the pattern</strong>
              <p>Start at floor −5 when <i>x</i> = 0, then add 4 floors each minute.</p>
            </section>
          </aside>
        )}
      </main>
      <footer className="runner-bottom">
        <button className="question-count">6 of 2,390 <ChevronDown /></button>
        <div>
          <button className="electric"><Sparkles /> Ask Scott</button>
          <button><Play /> Masterclass</button>
          <button><CircleHelp /> Similar</button>
        </div>
        <nav>
          <button onClick={showExplained}><Menu /> Explanation</button>
          <button>Previous</button>
          <button>Next</button>
        </nav>
      </footer>
    </div>
  );
}

const blueprintFeatures = [
  "Full Digital SAT question bank",
  "2 full-length Blueprint tests",
  "Study planner from your test date",
  "Question Rush practice sets",
  "Core analytics",
];

const proFeatures = [
  "Everything in Blueprint",
  "Masterclass for R&W and Math",
  "All 6 full-length Blueprint tests",
  "Ask Scott unlimited",
  "Challenge Questions unlocked",
  "Unlimited Question Rush",
  "Priority plans from Scott",
];

function PriceCard({
  name,
  oldPrice,
  price,
  features,
  pro,
  highlighted,
}: {
  name: string;
  oldPrice: string;
  price: string;
  features: string[];
  pro?: boolean;
  highlighted?: boolean;
}) {
  return (
    <section className={`price-card ${pro ? "pro" : ""} ${highlighted ? "highlighted" : ""}`}>
      {pro && <em className="best-value">Best value</em>}
      <span className="discount">40% off</span>
      <h2>{name}</h2>
      <div className="price"><s>${oldPrice}</s><strong>${price}</strong><span>one-time</span></div>
      <p>{pro ? "Masterclass, all six tests, and unlimited Ask Scott. Access through the SAT." : "Pay once. Keep it through your SAT. No subscription."}</p>
      <ul>
        {features.map((feature) => <li key={feature}><Check /> {feature}</li>)}
      </ul>
      <button>{pro ? "Get Pro — 40% off" : "Get Blueprint — 40% off"}</button>
    </section>
  );
}

function Pricing({ highlight }: { highlight?: string }) {
  return (
    <main className="pricing-page">
      <div className="sale-banner"><LockKeyhole /> Lock in 40% off <i /> 06h 12m 44s</div>
      <header>
        <Logo compact />
        <nav><a>Digital SAT</a><a>Pricing</a></nav>
        <Link href="/">Open app</Link>
      </header>
      <section className="pricing-content">
        <div className="faces"><i /><i /><Bullseye /><i /><i /></div>
        <h1>Everything you need to<br /><span>hit 1500.</span></h1>
        <p className="social-proof"><b>SR</b><b>AC</b><b>JM</b> Scott’s students. 1580 SAT · Georgia Tech.</p>
        <div className="price-grid">
          <PriceCard name="Blueprint" oldPrice="119" price="69" features={blueprintFeatures} highlighted={highlight === "blueprint"} />
          <PriceCard name="Blueprint Pro" oldPrice="135" price="79" features={proFeatures} pro highlighted={highlight === "pro"} />
        </div>
      </section>
    </main>
  );
}

function AccessRedirect({
  plan,
  feature,
}: {
  plan: Plan;
  feature: string;
}) {
  const router = useRouter();
  const target = planHref(pricingTarget(feature), plan);
  useEffect(() => {
    router.replace(target);
  }, [router, target]);
  return (
    <main className="access-redirect">
      <Bullseye />
      <p>Taking you to the plan that includes this feature…</p>
    </main>
  );
}

function NotFoundPage({ plan }: { plan: Plan }) {
  return (
    <main className="not-found">
      <Bullseye />
      <h1>That page isn&apos;t in this study plan.</h1>
      <Link href={planHref("/", plan)}>Return home</Link>
    </main>
  );
}

export function Site({
  path,
  planQuery,
  explained,
  highlight,
}: SiteProps) {
  const plan = parsePlan(planQuery);

  if (path === "/login") return <Login />;
  if (path === "/pricing") return <Pricing highlight={highlight} />;
  if (!appRoutes.has(path)) return <NotFoundPage plan={plan} />;

  if (path === "/challenges" && !canAccess(plan, "challenges")) {
    return <AccessRedirect plan={plan} feature="challenges" />;
  }
  if (path === "/tests" && !canAccess(plan, "tests")) {
    return <AccessRedirect plan={plan} feature="tests" />;
  }
  if (path.startsWith("/masterclass") && plan === "free") {
    return <AccessRedirect plan={plan} feature="full-masterclass" />;
  }

  switch (path) {
    case "/":
      return <HomePage plan={plan} />;
    case "/ask-scott":
      return <AskScott plan={plan} />;
    case "/planner":
      return <Planner plan={plan} />;
    case "/masterclass/rw":
      return <CoursePage kind="rw" plan={plan} />;
    case "/masterclass/math":
      return <CoursePage kind="math" plan={plan} />;
    case "/bank":
      return <Bank plan={plan} />;
    case "/bank/math":
      return <BankMath plan={plan} />;
    case "/bank/run":
      return <Runner plan={plan} explained={explained} />;
    case "/rush":
      return <Rush plan={plan} />;
    case "/challenges":
      return <Challenges plan={plan} />;
    case "/tests":
      return <Tests plan={plan} />;
    default:
      return <NotFoundPage plan={plan} />;
  }
}
