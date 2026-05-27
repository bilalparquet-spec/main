import { useState } from "react";
import { Stars } from "../ui/Stars.jsx";
import { IconHeart, IconPin, IconCar, IconSearchSm, IconLike, IconVerified } from "../ui/AppIcons.jsx";

const fallbackImg = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20900%20520%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%231c1b32%22/%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%237c3aed%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width%3D%22900%22%20height%3D%22520%22%20fill%3D%22url%28%23g%29%22/%3E%3Cpath%20d%3D%22M205%20335h490l-48-118c-12-31-42-51-75-51H336c-34%200-64%2020-77%2051l-54%20118Z%22%20fill%3D%22%23ddd6fe%22%20fill-opacity%3D%22.22%22/%3E%3Ccircle%20cx%3D%22310%22%20cy%3D%22352%22%20r%3D%2244%22%20fill%3D%22%2307080f%22/%3E%3Ccircle%20cx%3D%22590%22%20cy%3D%22352%22%20r%3D%2244%22%20fill%3D%22%2307080f%22/%3E%3Cpath%20d%3D%22M325%20214h245l31%2077H282l43-77Z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%22.15%22/%3E%3C/svg%3E";

const copy = {
  ar: {
    title: "ابدأ بالمفضلات",
    subtitle: "اضغط على أيقونة القلب لحفظ سياراتك المفضلة في قائمة.",
    action: "ابحث عن مفضلات",
    favoritesTitle: "سياراتك المفضلة",
    agencyPosts: "منشورات الوكالات",
    guestHint: "سجّل الدخول حتى تتمكن من إنشاء قائمتك الخاصة.",
    emptyCars: "لا توجد سيارات معروضة حاليًا",
    day: "دج/يوم",
    verified: "موثقة",
    cancel: "إلغاء مجاني",
    reviews: "تقييم",
  },
  fr: {
    title: "Commencez avec les favoris",
    subtitle: "Touchez l’icône cœur pour enregistrer vos véhicules favoris dans une liste.",
    action: "Trouver des favoris",
    favoritesTitle: "Vos favoris",
    agencyPosts: "Publications des agences",
    guestHint: "Connectez-vous pour créer votre propre liste.",
    emptyCars: "Aucune voiture publiée pour le moment",
    day: "DZD/jour",
    verified: "Vérifiée",
    cancel: "Annulation gratuite",
    reviews: "avis",
  },
  en: {
    title: "Get started with favorites",
    subtitle: "Tap the heart icon to save your favorite vehicles to a list.",
    action: "Find new favorites",
    favoritesTitle: "Your favorites",
    agencyPosts: "Agency listings",
    guestHint: "Sign in to create your own favorites list.",
    emptyCars: "No cars are listed right now",
    day: "DZD/day",
    verified: "Verified",
    cancel: "Free cancellation",
    reviews: "reviews",
  },
  tz: {
    title: "ⴱⴷⵓ ⵙ ⵉⵎⵖⵏⴰⵙⵏ",
    subtitle: "ⵙⵏⵏⴹ ⵖⴼ ⵜⵎⵙⵙⵉⵜ ⵏ ⵓⵍ ⴰⴽⴽⵏ ⴰⴷ ⵜⵙⴽⵍⵙⴷ ⵉⵙⵉⴷⵏ ⵉⵎⵖⵏⴰⵙⵏ.",
    action: "ⵔⵣⵓ ⵖⴼ ⵉⵎⵖⵏⴰⵙⵏ",
    favoritesTitle: "ⵉⵎⵖⵏⴰⵙⵏ ⵏⵏⴽ",
    agencyPosts: "ⵜⵉⵣⵔⵉⴳⵉⵏ ⵏ ⵜⵡⴽⴰⵍⵉⵏ",
    guestHint: "ⵙⵙⵉⴷⴼ ⴰⴽⴽⵏ ⴰⵜⵙⵏⵓⵍⴼⵓⴷ ⵜⴰⴱⴷⴰⵔⵜ ⵏⵏⴽ.",
    emptyCars: "ⵓⵍⴰⵛ ⵉⵙⵉⴷⵏ ⵉⵎⴰⵍⵏ ⴷⵖⴰ",
    day: "DZD/ⴰⵙⵙ",
    verified: "ⵉⵜⵜⵓⵙⵙⵏ",
    cancel: "ⴰⵙⵔⵓⵙⵉ ⴱⴰⵟⵍ",
    reviews: "ⵜⵉⵙⵖⴰⵍ",
  },
};

function pickText(lang) {
  return copy[lang] || copy.ar;
}

function SafeCarImage({ src, alt }) {
  const [imgSrc, setImgSrc] = useState(src || fallbackImg);
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "linear-gradient(135deg,#151624,#090A12)", overflow: "hidden" }}>
      {!loaded && <div className="skel" style={{ position: "absolute", inset: 0, borderRadius: 0 }} />}
      <img
        src={imgSrc}
        alt={alt || "car"}
        onLoad={() => setLoaded(true)}
        onError={() => { setLoaded(true); setImgSrc(fallbackImg); }}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: loaded ? 1 : 0, transition: "opacity .25s ease" }}
      />
    </div>
  );
}

function AgencyCarPost({ car, liked, onLike, onOpenCar, lang, index }) {
  const t = pickText(lang);
  const price = Number(car?.price || 0).toLocaleString("fr-DZ");
  const badgeColor = { luxury: "#F59E0B", SUV: "#34D399", electric: "#60A5FA", wedding: "#F472B6", "4x4": "#FB923C", van: "#94A3B8" }[car?.type] || "#A78BFA";

  return (
    <article
      className="hov"
      onClick={() => onOpenCar?.(car)}
      style={{
        background: "rgba(255,255,255,.035)",
        border: "1px solid rgba(255,255,255,.08)",
        borderRadius: 22,
        overflow: "hidden",
        cursor: "pointer",
        animation: `fadeUp .32s ease ${Math.min(index, 6) * .045}s both`,
      }}
    >
      <div style={{ position: "relative", height: "clamp(162px, 46vw, 210px)", background: "#090A12" }}>
        <SafeCarImage src={car?.img || car?.image || car?.images?.[0]} alt={car?.name} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,.72),transparent 58%)" }} />
        <button
          onClick={(e) => { e.stopPropagation(); onLike?.(car.id); }}
          aria-label="favorite"
          style={{
            position: "absolute", top: 11, insetInlineStart: 11,
            width: 38, height: 38, borderRadius: "50%", border: "1px solid rgba(255,255,255,.12)",
            background: "rgba(0,0,0,.48)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
            display: "grid", placeItems: "center", cursor: "pointer",
            animation: liked ? "heartPop .38s ease both" : undefined,
          }}
        >
          <IconLike size={18} active={liked} />
        </button>
        {(car?.badge || car?.type) && (
          <div data-no-i18n="true" style={{
            position: "absolute", top: 11, insetInlineEnd: 11,
            borderRadius: 999, padding: "4px 10px", fontSize: 11, fontWeight: 900,
            color: badgeColor, background: `${badgeColor}22`, border: `1px solid ${badgeColor}55`,
          }}>{car.badge || car.type}</div>
        )}
        <div style={{ position: "absolute", bottom: 10, insetInlineStart: 12, insetInlineEnd: 12, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          {car?.agencyName ? <span data-no-i18n="true" style={{ maxWidth: "58%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: "rgba(255,255,255,.82)", fontSize: 12, fontWeight: 800 }}>{car.agencyName}</span> : <span />}
          {car?.verified && <span style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "#34D399", background: "rgba(52,211,153,.13)", border: "1px solid rgba(52,211,153,.28)", borderRadius: 999, padding: "3px 8px", fontSize: 10, fontWeight: 850 }}><IconVerified size={11} color="#34D399" /> {t.verified}</span>}
        </div>
      </div>
      <div style={{ padding: "13px 14px 15px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 7 }}>
          <div style={{ minWidth: 0 }}>
            <h3 data-no-i18n="true" style={{ margin: 0, color: "#fff", fontSize: 15.5, fontWeight: 950, lineHeight: 1.35, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{car?.name || "Car"}</h3>
            <div style={{ display: "flex", alignItems: "center", gap: 5, color: "rgba(255,255,255,.42)", fontSize: 11, marginTop: 3 }}>
              <IconPin size={11} color="rgba(255,255,255,.42)" />
              <span>{car?.city || car?.wilaya || "الجزائر"}</span>
            </div>
          </div>
          <div style={{ textAlign: "end", flexShrink: 0 }}>
            <div style={{ color: "#C084FC", fontSize: 17, fontWeight: 950, lineHeight: 1 }}>{price}</div>
            <div style={{ color: "rgba(255,255,255,.34)", fontSize: 10, marginTop: 2 }}>{t.day}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, paddingTop: 9, borderTop: "1px solid rgba(255,255,255,.07)" }}>
          <Stars r={Number(car?.rating || 0)} size={11} />
          <span style={{ color: "rgba(255,255,255,.34)", fontSize: 11 }}>{Number(car?.reviews || 0)} {t.reviews}</span>
        </div>
      </div>
    </article>
  );
}

export function FavoritesPage({ liked, cars = [], onLike, onOpenCar, onRequireAuth, onSearch, isLoggedIn = false, appLang = "ar" }) {
  const t = pickText(appLang);
  const likedSet = liked instanceof Set ? liked : new Set(Array.isArray(liked) ? liked : []);
  const allCars = Array.isArray(cars) ? cars.filter(Boolean) : [];
  const favCars = allCars.filter(c => likedSet.has(c.id) || likedSet.has(String(c.id)) || likedSet.has(Number(c.id)));
  const shownCars = favCars.length > 0 ? favCars : allCars;
  const heading = favCars.length > 0 ? t.favoritesTitle : t.agencyPosts;

  const handleMainAction = () => {
    if (!isLoggedIn) onRequireAuth?.();
    else onSearch?.();
  };

  return (
    <div style={{ minHeight: "62vh", padding: "10px 0 102px", animation: "fadeUp .28s ease", color: "#F1F5F9" }}>
      <section style={{
        margin: "2px 0 18px",
        borderRadius: 22,
        background: "rgba(255,255,255,.035)",
        border: "1px solid rgba(255,255,255,.08)",
        padding: "16px 16px 14px",
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <div style={{ width: 38, height: 38, borderRadius: 15, flexShrink: 0, display: "grid", placeItems: "center", background: "rgba(239,68,68,.1)", border: "1px solid rgba(239,68,68,.22)" }}>
            <IconHeart active size={20} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2 style={{ margin: "0 0 5px", color: "#fff", fontSize: 17, fontWeight: 950, lineHeight: 1.35 }}>{t.title}</h2>
            <p style={{ margin: 0, color: "rgba(255,255,255,.62)", fontSize: 12.5, lineHeight: 1.8 }}>{t.subtitle}</p>
            {!isLoggedIn && <p style={{ margin: "4px 0 0", color: "rgba(255,255,255,.34)", fontSize: 11.5, lineHeight: 1.7 }}>{t.guestHint}</p>}
          </div>
        </div>
        <button
          onClick={handleMainAction}
          className="btn-press"
          style={{
            marginTop: 13,
            width: "100%",
            border: "1px solid rgba(167,139,250,.22)",
            borderRadius: 16,
            minHeight: 48,
            background: isLoggedIn ? "rgba(124,58,237,.12)" : "linear-gradient(135deg,#7C3AED,#4F46E5)",
            color: isLoggedIn ? "#DDD6FE" : "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 9,
            fontFamily: "inherit",
            fontSize: 13.5,
            fontWeight: 950,
            cursor: "pointer",
          }}
        >
          <IconSearchSm size={18} color={isLoggedIn ? "#C4B5FD" : "#fff"} />
          {t.action}
        </button>
      </section>

      {isLoggedIn && (
        <>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, margin: "8px 2px 12px" }}>
            <h3 style={{ margin: 0, color: "#fff", fontSize: 15, fontWeight: 950 }}>{heading}</h3>
            <span style={{ color: "rgba(255,255,255,.36)", fontSize: 11, fontWeight: 800 }}>{shownCars.length}</span>
          </div>
          {shownCars.length === 0 ? (
            <div style={{ textAlign: "center", padding: "46px 20px", borderRadius: 22, background: "rgba(255,255,255,.025)", border: "1px dashed rgba(255,255,255,.1)" }}>
              <div style={{ marginBottom: 14, display: "flex", justifyContent: "center" }}><IconCar size={58} color="rgba(255,255,255,.22)" /></div>
              <div style={{ fontSize: 14, fontWeight: 850, color: "rgba(255,255,255,.48)" }}>{t.emptyCars}</div>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "var(--grid-cols, repeat(auto-fill,minmax(min(260px,44vw),1fr)))", gap: 14 }}>
              {shownCars.map((car, i) => (
                <AgencyCarPost
                  key={car.id || i}
                  car={car}
                  index={i}
                  liked={likedSet.has(car.id) || likedSet.has(String(car.id)) || likedSet.has(Number(car.id))}
                  onLike={onLike}
                  onOpenCar={onOpenCar}
                  lang={appLang}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
