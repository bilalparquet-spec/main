import { useEffect, useRef, useState } from "react";
import ROAD_IMG from "../assets/roadImg.js";

export function GuestAuthSheet({ onClose, onLogin, onRegister }) {
  const [visible, setVisible] = useState(false);
  const backdropRef = useRef();

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  function dismiss() {
    setVisible(false);
    setTimeout(onClose, 380);
  }

  function goLogin() {
    setVisible(false);
    setTimeout(onLogin, 340);
  }

  function goRegister() {
    setVisible(false);
    setTimeout(onRegister, 340);
  }

  function handleBackdrop(e) {
    if (e.target === backdropRef.current) dismiss();
  }

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdrop}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1200,
        background: visible ? "rgba(4,4,12,.72)" : "rgba(4,4,12,0)",
        backdropFilter: visible ? "blur(12px)" : "blur(0px)",
        WebkitBackdropFilter: visible ? "blur(12px)" : "blur(0px)",
        transition: "background .35s ease, backdrop-filter .35s ease, -webkit-backdrop-filter .35s ease",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          margin: "0 auto",
          borderRadius: "28px 28px 0 0",
          overflow: "hidden",
          background: "#0A0B17",
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: visible
            ? "transform .48s cubic-bezier(.22,1.6,.36,1)"
            : "transform .34s cubic-bezier(.4,0,.6,1)",
          boxShadow: "0 -24px 80px rgba(0,0,0,.7)",
        }}
      >
        {/* ── Road hero image (user-uploaded) ── */}
        <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
          <img
            src={ROAD_IMG}
            alt="road"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 40%",
              display: "block",
              transform: visible ? "scale(1)" : "scale(1.08)",
              transition: "transform .6s cubic-bezier(.22,1,.36,1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(10,11,23,0) 15%, rgba(10,11,23,.98) 100%)",
            }}
          />

          {/* close pill */}
          <button
            onClick={dismiss}
            style={{
              position: "absolute", top: 14, right: 14,
              width: 32, height: 32, borderRadius: "50%",
              background: "rgba(0,0,0,.4)", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              backdropFilter: "blur(8px)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <line x1="2" y1="2" x2="12" y2="12" stroke="rgba(255,255,255,.8)" strokeWidth="2" strokeLinecap="round"/>
              <line x1="12" y1="2" x2="2" y2="12" stroke="rgba(255,255,255,.8)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* logo badge */}
          <div style={{ position: "absolute", bottom: 18, left: 0, right: 0, textAlign: "center" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(10,11,23,.55)", backdropFilter: "blur(12px)",
              padding: "6px 16px 6px 10px", borderRadius: 40,
              border: "1px solid rgba(167,139,250,.22)",
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 8,
                background: "linear-gradient(135deg,#6D28D9,#4F46E5)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <rect x="1" y="3" width="15" height="13" rx="2" stroke="#fff" strokeWidth="2"/>
                  <path d="M16 8h4l3 3v5h-7V8z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="5.5" cy="18.5" r="2.5" stroke="#fff" strokeWidth="2"/>
                  <circle cx="18.5" cy="18.5" r="2.5" stroke="#fff" strokeWidth="2"/>
                </svg>
              </div>
              <span style={{
                fontWeight: 900, fontSize: 15,
                background: "linear-gradient(90deg,#A78BFA,#818CF8)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>درايف RENT</span>
            </div>
          </div>
        </div>

        {/* ── Content ── */}
        <div style={{ padding: "22px 24px 32px", textAlign: "center" }}>
          <h2 style={{
            fontSize: 22, fontWeight: 900, color: "#F1F5F9",
            marginBottom: 8, letterSpacing: "-.5px",
          }}>مرحباً بك في درايف RENT</h2>
          <p style={{
            fontSize: 13, color: "rgba(255,255,255,.42)",
            lineHeight: 1.7, marginBottom: 26,
          }}>
            سجّل دخولك للوصول إلى مفضلتك، رحلاتك ورسائلك
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Login */}
            <button
              onClick={goLogin}
              style={{
                width: "100%", padding: "15px 20px", borderRadius: 16,
                border: "none", background: "linear-gradient(135deg,#6D28D9,#4F46E5)",
                color: "#fff", fontSize: 15, fontWeight: 800, fontFamily: "inherit",
                cursor: "pointer", display: "flex", alignItems: "center",
                justifyContent: "center", gap: 10,
                boxShadow: "0 6px 24px rgba(109,40,217,.45)",
                transition: "filter .2s, transform .15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.filter = "brightness(1.12)")}
              onMouseLeave={e => (e.currentTarget.style.filter = "brightness(1)")}
              onMouseDown={e => (e.currentTarget.style.transform = "scale(.97)")}
              onMouseUp={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
                <polyline points="10 17 15 12 10 7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="15" y1="12" x2="3" y2="12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
              تسجيل الدخول
            </button>

            {/* Register */}
            <button
              onClick={goRegister}
              style={{
                width: "100%", padding: "15px 20px", borderRadius: 16,
                border: "1.5px solid rgba(167,139,250,.35)",
                background: "rgba(109,40,217,.1)",
                color: "#A78BFA", fontSize: 15, fontWeight: 800, fontFamily: "inherit",
                cursor: "pointer", display: "flex", alignItems: "center",
                justifyContent: "center", gap: 10,
                transition: "background .2s, transform .15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(109,40,217,.2)")}
              onMouseLeave={e => (e.currentTarget.style.background = "rgba(109,40,217,.1)")}
              onMouseDown={e => (e.currentTarget.style.transform = "scale(.97)")}
              onMouseUp={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#A78BFA" strokeWidth="2.2" strokeLinecap="round"/>
                <circle cx="12" cy="7" r="4" stroke="#A78BFA" strokeWidth="2.2"/>
                <line x1="19" y1="8" x2="19" y2="14" stroke="#A78BFA" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="22" y1="11" x2="16" y2="11" stroke="#A78BFA" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
              افتح حساباً جديداً
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0 16px" }}>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,.07)" }}/>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,.25)", flexShrink: 0 }}>أو تصفح كضيف</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,.07)" }}/>
          </div>

          <button
            onClick={dismiss}
            style={{
              background: "none", border: "none",
              color: "rgba(255,255,255,.35)", fontSize: 13,
              fontFamily: "inherit", cursor: "pointer",
              textDecoration: "underline", textUnderlineOffset: 3, padding: 0,
            }}
          >
            متابعة بدون حساب
          </button>
        </div>
      </div>
    </div>
  );
}
