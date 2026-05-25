import APP_LOGO_IMG from "../assets/appLogo.js";

export function SplashScreen({ onDone }) {
  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 99999,
        background: "linear-gradient(135deg, #07080F 0%, #0D0E1F 50%, #07080F 100%)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        fontFamily: "'Cairo', sans-serif",
        animation: "splashFadeIn .55s cubic-bezier(.4,0,.2,1) forwards",
      }}
      onClick={onDone}
    >
      {/* Glow orbs */}
      <div style={{
        position: "absolute", width: 340, height: 340, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,.22) 0%, transparent 70%)",
        top: "10%", left: "50%", transform: "translateX(-50%)", filter: "blur(60px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: 220, height: 220, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(79,70,229,.15) 0%, transparent 70%)",
        bottom: "15%", right: "5%", filter: "blur(50px)",
        pointerEvents: "none",
      }} />

      {/* Logo */}
      <div style={{
        animation: "splashFadeIn .6s ease forwards",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 24,
      }}>
        <div style={{
          width: 130, height: 130, borderRadius: 32,
          overflow: "hidden",
          boxShadow: "0 0 60px rgba(124,58,237,.5), 0 24px 70px rgba(0,0,0,.6)",
          animation: "splashFadeIn .7s cubic-bezier(.34,1.56,.64,1) forwards",
        }}>
          <img
            src={APP_LOGO_IMG}
            alt="RENT درايف"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* App name */}
        <div style={{ textAlign: "center", animation: "splashSlideUp .6s ease .2s both" }}>
          <div style={{
            fontSize: 38, fontWeight: 900, letterSpacing: "-1px", lineHeight: 1,
            background: "linear-gradient(135deg, #fff 30%, #A78BFA)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            <span style={{ color: "#A78BFA", WebkitTextFillColor: "#A78BFA" }}>RENT</span>
            {" "}درايف
          </div>
          <div style={{
            fontSize: 14, color: "rgba(255,255,255,.45)", marginTop: 8, fontWeight: 600,
            letterSpacing: "0.5px",
          }}>
            أجر سيارتك المثالية بكل سهولة
          </div>
        </div>

        {/* Dots loader */}
        <div style={{ display: "flex", gap: 8, marginTop: 12, animation: "splashSlideUp .6s ease .4s both" }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: 8, height: 8, borderRadius: "50%",
              background: i === 1 ? "#A78BFA" : "rgba(167,139,250,.35)",
              animation: `splashPulse 1.2s ease ${i * 0.2}s infinite`,
            }} />
          ))}
        </div>
      </div>

      {/* Auto-dismiss */}
      <AutoDismiss onDone={onDone} />
    </div>
  );
}

function AutoDismiss({ onDone }) {
  // Auto close after 2.2 seconds
  if (typeof window !== "undefined") {
    setTimeout(onDone, 2200);
  }
  return null;
}
