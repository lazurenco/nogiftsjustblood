import React from "react";
import { createRoot } from "react-dom/client";
import htm from "htm";

const html = htm.bind(React.createElement);

const content = {
  en: {
    lang: "EN",
    altLang: "UK",
    badge: "A birthday wish",
    title: "My birthday wish: donate blood 🎂🩸",
    subtitle:
      "No gifts — just something that actually saves lives ❤️",
    reassurance: "Takes ~40 minutes. You’ll be fine 🙂",
    manifesto:
      "I’m okay. This is just the birthday thing I care about this year — and I can go with you if you’re unsure.",
    primaryCta: "Find a place near you 🌍",
    cityCtas: [
      { label: "Odesa donation point 🩸", href: "https://www.donor.ua/centers/45" },
      { label: "Kyiv donation point 🩸", href: "https://www.donor.ua/centers/1" },
    ],
    supportPrompt: "Not sure?",
    supportTitle: "I’ll go with you 🤝",
    supportText: "Text me — we’ll do it together",
    supportCta: "Text me — we’ll go together 🤝",
    supportHref: "sms:",
    impactLabel: "Impact",
    stats: [
      { value: "~40 min", label: "with checkup" },
      { value: "1 donation", label: "can help up to 3 people" },
      { value: "0 gifts", label: "needed this year" },
    ],
    resourceKicker: "Why This Matters",
    stepsTitle: "How it works",
    stepsKicker: "Process",
    steps: [
      {
        title: "Eat light",
        text: "Have water and a normal light meal before you go.",
      },
      {
        title: "Bring ID",
        text: "Take your identification document and a few spare minutes.",
      },
      {
        title: "Quick check",
        text: "The staff will ask a few questions and do a basic screening.",
      },
      {
        title: "Donate",
        text: "The actual donation is short. Then rest a little and you are done.",
      },
    ],
    centersTitle: "Where to go",
    centersIntro:
      "Pick the easiest option:",
    resourceTitle: "Why it matters",
    resourceIntro:
      "One quiet, practical visit can help more than one person.",
    infographicCaption: "1 donation can help up to 3 people",
    infographicNote: "Donors per 1000 people",
    faqTitle: "FAQ",
    faqKicker: "Answers",
    faq: [
      ["Is it scary?", "Not really. Usually easier than it sounds 🙂"],
      ["How long does it take?", "Donation itself is usually ~10–15 minutes. Around ~40 minutes total with checkup."],
      ["Can I eat before?", "Yes — light food is usually better. Avoid very fatty meals."],
      ["Coffee?", "Better after."],
      ["Workout?", "Light activity later is usually fine. Skip intense training the same day."],
      ["Can’t donate?", "Share the page, encourage someone, or come with a friend ❤️"],
    ],
    faqDisclaimer:
      "Rules differ by country and donation center. Always follow local medical guidance.",
    footer:
      "If you donate — send me a selfie 📸\nI’ll be proud of you ❤️",
  },
  uk: {
    lang: "UK",
    altLang: "EN",
    badge: "Моє побажання",
    title:
      "Якщо бажаєш мене привітати з\u00a0днем\u00a0народження, найкращий подарунок - здати кров! 🎂🩸",
    subtitle:
      "Без подарунків — просто зроби щось, що справді рятує життя ❤️",
    reassurance:
      "Це займе ~40 хвилин. З тобою все буде добре 🙂 До того ж отримаєш безкоштовний аналіз крові.",
    manifesto:
      "Зі мною все добре. Просто цього року мені важливо саме це — і я можу піти з тобою, якщо ти вагаєшся.",
    primaryCta: "Знайти поруч 🌍",
    cityCtas: [
      { label: "Одеська обласна станція переливання крові 🩸", href: "https://www.donor.ua/centers/45" },
      { label: "Київський міський центр крові 🩸", href: "https://www.donor.ua/centers/1" },
    ],
    supportPrompt: "Не впевнено?",
    supportTitle: "Я піду з тобою 🤝",
    supportText: "Напиши мені — зробимо це разом",
    supportCta: "Напиши мені — підемо разом 🤝",
    supportHref: "sms:",
    impactLabel: "Вплив",
    stats: [
      { value: "~40 хв", label: "разом із перевіркою" },
      { value: "1 донація", label: "може допомогти до 3 людям" },
      { value: "0 подарунків", label: "мені справді не потрібно" },
    ],
    resourceKicker: "Чому це важливо",
    stepsTitle: "Як це відбувається",
    stepsKicker: "Процес",
    steps: [
      {
        title: "Легко поїж",
        text: "Перед донацією випий води та з’їж щось легке.",
      },
      {
        title: "Візьми документ",
        text: "Потрібне посвідчення особи і трохи вільного часу.",
      },
      {
        title: "Швидка перевірка",
        text: "Працівники поставлять кілька запитань і зроблять базовий скринінг.",
      },
      {
        title: "Донація",
        text: "Сама процедура коротка. Потім трохи відпочинку і все готово.",
      },
    ],
    centersTitle: "Куди звернутися",
    centersIntro:
      "Обери найпростіший варіант:",
    resourceTitle: "Чому це важливо",
    resourceIntro:
      "Один спокійний, практичний візит може допомогти не одній людині.",
    infographicCaption: "1 донація може допомогти до 3 людям",
    infographicNote: "Донорів на 1000 людей",
    faqTitle: "FAQ",
    faqKicker: "Відповіді",
    faq: [
      ["Це страшно?", "Не дуже. Зазвичай простіше, ніж здається 🙂"],
      ["Скільки це займає?", "Сама донація зазвичай триває ~10–15 хвилин. Разом із перевіркою — близько ~40 хвилин."],
      ["Можна їсти перед цим?", "Так — легка їжа зазвичай краще. Уникай дуже жирної їжі."],
      ["Каву?", "Краще після."],
      ["Тренування?", "Легка активність пізніше зазвичай ок. Інтенсивне тренування в той самий день краще пропустити."],
      ["Не можеш здати?", "Поділись сторінкою, підтримай когось або прийди з другом ❤️"],
    ],
    faqDisclaimer:
      "Правила відрізняються залежно від країни та центру донації. Завжди дотримуйся місцевих медичних рекомендацій.",
    footer:
      "Якщо здаси кров — надішли мені селфі 📸\nЯ пишатимусь тобою ❤️",
  },
};

const uaCenters = [
  {
    city: "Одеса",
    title: "Одеська обласна станція переливання крові 🩸",
    text: "Локальний пункт донації.",
    href: "https://www.donor.ua/centers/45",
  },
  {
    city: "Київ",
    title: "Київський міський центр крові 🩸",
    text: "Локальний пункт донації.",
    href: "https://www.donor.ua/centers/1",
  },
];

const officialCountryServices = {
  US: {
    label: "American Red Cross",
    href: "https://www.redcrossblood.org/give.html/find-drive",
  },
  GB: {
    label: "NHS Give Blood",
    href: "https://www.blood.co.uk/",
  },
  CA: {
    label: "Canadian Blood Services",
    href: "https://www.blood.ca/en/blood/am-i-eligible-donate-blood/book-donation",
  },
  AU: {
    label: "Australian Red Cross Lifeblood",
    href: "https://www.lifeblood.com.au/",
  },
  IE: {
    label: "Irish Blood Transfusion Service",
    href: "https://www.giveblood.ie/",
  },
  NZ: {
    label: "New Zealand Blood Service",
    href: "https://www.nzblood.co.nz/",
  },
};

function buildSearchQuery(place) {
  if (!place) return "blood donation center near me";
  return `blood donation center ${place}`;
}

function buildGoogleMapsUrl(query, coords) {
  if (coords?.latitude && coords?.longitude) {
    return `https://www.google.com/maps/search/blood+donation+center/@${coords.latitude},${coords.longitude},12z`;
  }

  return `https://www.google.com/maps/search/${encodeURIComponent(query)}`;
}

function buildOpenStreetMapUrl(query, coords) {
  if (coords?.latitude && coords?.longitude) {
    return `https://www.openstreetmap.org/?mlat=${coords.latitude}&mlon=${coords.longitude}#map=12/${coords.latitude}/${coords.longitude}`;
  }

  return `https://www.openstreetmap.org/search?query=${encodeURIComponent(query)}`;
}

function getInternationalCenters(location, locale) {
  const placeParts = [location.city, location.subdivision, location.countryName].filter(Boolean);
  const place = placeParts.join(", ");
  const query = buildSearchQuery(place);
  const centers = [];

  if (location.country && officialCountryServices[location.country]) {
    centers.push({
      label: officialCountryServices[location.country].label,
      href: officialCountryServices[location.country].href,
      detail:
        locale === "uk"
          ? "Офіційний сервіс для запису або пошуку локальних пунктів."
          : "Official service for appointments or local drive lookup.",
    });
  }

  centers.push(
    {
      label: locale === "uk" ? "Google Maps поруч" : "Google Maps near you",
      href: buildGoogleMapsUrl(query, location.coords),
      detail:
        locale === "uk"
          ? `Пошук центрів донації для: ${place || "your area"}.`
          : `Searches blood donation centers for: ${place || "your area"}.`,
    },
    {
      label: locale === "uk" ? "OpenStreetMap поруч" : "OpenStreetMap near you",
      href: buildOpenStreetMapUrl(query, location.coords),
      detail:
        locale === "uk"
          ? "Резервний відкритий картографічний пошук."
          : "Fallback open map search.",
    },
    {
      label: locale === "uk" ? "Find a place near you 🌍" : "Find a place near you 🌍",
      href: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      detail:
        locale === "uk"
          ? "Location-based search when the local service is not obvious."
          : "Location-based search when the local service is not obvious.",
    },
  );

  return centers;
}

function App() {
  const initialLanguage =
    navigator.language && navigator.language.toLowerCase().startsWith("uk")
      ? "uk"
      : "en";

  const [locale, setLocale] = React.useState(initialLanguage);
  const [isAutoLocale, setIsAutoLocale] = React.useState(true);
  const [allowMotion, setAllowMotion] = React.useState(false);
  const [location, setLocation] = React.useState({
    country: null,
    countryName: null,
    city: null,
    subdivision: null,
    coords: null,
    source: "browser",
  });
  const t = content[locale];
  const regionNames = React.useMemo(
    () => new Intl.DisplayNames([locale === "uk" ? "uk" : "en"], { type: "region" }),
    [locale],
  );

  React.useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  React.useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = navigator.connection?.saveData === true;

    setAllowMotion(!(reduceMotion || saveData));
  }, []);

  React.useEffect(() => {
    let cancelled = false;

    async function detectLocation() {
      try {
        const response = await fetch(
          "https://api.country.is/?fields=country,country_name,city,subdivision,location",
        );
        const data = await response.json();

        if (cancelled) return;

        setLocation((current) => ({
          ...current,
          country: data.country ?? current.country,
          countryName:
            data.country_name ??
            (data.country ? regionNames.of(data.country) : current.countryName),
          city: data.city ?? current.city,
          subdivision: data.subdivision ?? current.subdivision,
          coords:
            data.location?.latitude && data.location?.longitude
              ? {
                  latitude: data.location.latitude,
                  longitude: data.location.longitude,
                }
              : current.coords,
          source: "ip",
        }));

        if (isAutoLocale && data.country === "UA") {
          setLocale("uk");
        }
      } catch {
        // Silent fallback to browser language only.
      }
    }

    detectLocation();

    return () => {
      cancelled = true;
    };
  }, [isAutoLocale, regionNames]);

  const locationLabel = [location.city, location.countryName].filter(Boolean).join(", ");
  const nearbySearchHref = buildGoogleMapsUrl(buildSearchQuery(locationLabel), location.coords);
  const nearbySearchCard = {
    city: locale === "uk" ? "Поруч" : "Near you",
    title: t.primaryCta,
    text: locale === "uk" ? "Пошук за твоєю локацією." : "Location-based search.",
    href: nearbySearchHref,
  };
  const centerCards =
    locale === "uk"
      ? [nearbySearchCard, ...uaCenters]
      : getInternationalCenters(location, locale).map((item) => ({
          city: location.city || location.countryName || "Nearby",
          title: item.label,
          text: item.detail,
          href: item.href,
        }));

  const centerKicker =
    locale === "uk"
      ? "Поруч / Одеса / Київ"
      : locationLabel
        ? `Detected: ${locationLabel}`
        : "International";

  function handleLocaleSwitch() {
    setIsAutoLocale(false);
    setLocale(locale === "en" ? "uk" : "en");
  }

  return (
    html`
      <div className=${allowMotion ? "page-shell motion-safe" : "page-shell"}>
        <div className="ambient ambient-left" />
        <div className="ambient ambient-right" />
        <div className="ambient ambient-center" />

        <header className="hero">
          <nav className="topbar">
            <div className="brand">
              <span className="brand-mark">+</span>
              <span>No Gifts, Just Blood</span>
            </div>

            <button
              className="lang-switch"
              type="button"
              onClick=${handleLocaleSwitch}
              aria-label=${`Switch language to ${t.altLang}`}
            >
              ${t.lang} / ${t.altLang}
            </button>
          </nav>

          <section className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">${t.badge}</p>
              <h1 className=${locale === "uk" ? "hero-title hero-title-uk" : "hero-title"}>
                ${t.title}
              </h1>
              <p className="lead">${t.subtitle}</p>
              <p className="reassurance">${t.reassurance}</p>
              <p className="manifesto">${t.manifesto}</p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href=${nearbySearchHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  ${t.primaryCta}
                </a>
                ${t.cityCtas.map(
                  (cta) => html`
                    <a
                      className="button button-secondary"
                      href=${cta.href}
                      key=${cta.label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      ${cta.label}
                    </a>
                  `,
                )}
              </div>

              <div className="pledge-card support-card">
                <span className="pledge-label">${t.supportPrompt}</span>
                <strong className="support-heading">${t.supportTitle}</strong>
                <p className="pledge">${t.supportText}</p>
                <a className="button button-primary button-support" href=${t.supportHref}>
                  ${t.supportCta}
                </a>
              </div>
            </div>

            <aside className="impact-card">
              <div className="pulse" />
              <p className="impact-label">${t.impactLabel}</p>
              <ul className="stat-list">
                ${t.stats.map(
                  (item) => html`
                    <li key=${item.label}>
                      <strong>${item.value}</strong>
                      <span>${item.label}</span>
                    </li>
                  `,
                )}
              </ul>
            </aside>
          </section>
        </header>

        <main className="content">
          <section className="panel resource-panel">
            <p className="section-kicker">${t.resourceKicker}</p>
            <h2>${t.resourceTitle}</h2>
            <p>${t.resourceIntro}</p>
            <figure className="infographic-card infographic-card-wide">
              <img
                src="https://nogiftsjustblood.carrd.co/assets/images/image01.jpg?v=2c44f59f"
                alt="Blood donation infographic"
              />
              <figcaption className="infographic-caption">
                <strong>${t.infographicCaption}</strong>
                <span>${t.infographicNote}</span>
              </figcaption>
            </figure>
          </section>

          <section className="panel">
            <p className="section-kicker">${t.stepsKicker}</p>
            <h2>${t.stepsTitle}</h2>
            <div className="steps-grid">
              ${t.steps.map(
                (step, index) => html`
                  <article className="step-card" key=${step.title}>
                    <span className="step-index">0${index + 1}</span>
                    <h3>${step.title}</h3>
                    <p>${step.text}</p>
                  </article>
                `,
              )}
            </div>
          </section>

          <section className="panel" id="centers">
            <p className="section-kicker">${centerKicker}</p>
            <h2>${t.centersTitle}</h2>
            <p>${t.centersIntro}</p>
            <div className="link-grid">
              ${centerCards.map(
                (center) => html`
                  <a
                    key=${center.title}
                    className="center-link"
                    href=${center.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="center-meta">${center.city}</span>
                    <strong>${center.title}</strong>
                    <small>${center.text}</small>
                    <span className="center-arrow" aria-hidden="true">↗</span>
                  </a>
                `,
              )}
            </div>
          </section>

          <section className="panel faq-panel" id="faq">
            <p className="section-kicker">${t.faqKicker}</p>
            <h2>${t.faqTitle}</h2>
            ${locale === "uk"
              ? html`
                  <a
                    className="faq-link-card"
                    href="https://ospk.od.ua/faq/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="center-meta">Odesa</span>
                    <strong>FAQ Odessa</strong>
                    <small>
                      Підготовка, пояснення і часті питання від Одеської станції переливання крові.
                    </small>
                    <span className="center-arrow" aria-hidden="true">↗</span>
                  </a>
                `
              : null}
            <div className="faq-list">
              ${t.faq.map(
                ([question, answer]) => html`
                  <article className="faq-item" key=${question}>
                    <h3>${question}</h3>
                    <p>${answer}</p>
                  </article>
                `,
              )}
            </div>
            <p className="faq-disclaimer">${t.faqDisclaimer}</p>
          </section>
        </main>

        <footer className="footer-note" id="final-note">
          <p>${t.footer}</p>
        </footer>
      </div>
    `
  );
}

createRoot(document.getElementById("root")).render(React.createElement(App));
