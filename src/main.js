import React from "react";
import { createRoot } from "react-dom/client";
import htm from "htm";

const html = htm.bind(React.createElement);

const content = {
  en: {
    lang: "EN",
    altLang: "UK",
    badge: "Birthday idea with actual impact",
    title: "Skip the gift. Donate blood instead.",
    subtitle:
      "If you wanted to celebrate me, this is the best possible way: spend around 40 minutes and help save a life.",
    primaryCta: "Find a donation center",
    secondaryCta: "Read the FAQ",
    pledge: "If you're nervous, I'll go with you.",
    stats: [
      { value: "30–40 min", label: "door to done" },
      { value: "1 visit", label: "can help multiple people" },
      { value: "0 gifts", label: "needed this year" },
    ],
    whyTitle: "Why this instead of presents?",
    whyText:
      "I do not really need more things. Blood donations are concrete, immediate, and useful. That makes them a much better birthday gesture.",
    stepsTitle: "How it works",
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
      "We’ll try to detect your country and city, then suggest the most relevant local search links.",
    faqTitle: "FAQ",
    faq: [
      ["Is it scary?", "Usually not. It is mostly a routine process and staff guide you through it."],
      ["Does it hurt?", "Only the quick needle moment."],
      ["Can I eat first?", "Yes. Light food and water are a good idea."],
      ["Coffee?", "Better after the donation."],
      ["Can’t donate?", "Share the page or bring someone who can."],
    ],
    footer:
      "If you donate, send me a selfie. I will be proud of you.",
  },
  uk: {
    lang: "UK",
    altLang: "EN",
    badge: "Ідея на день народження з реальною користю",
    title: "Без подарунків. Здай кров замість них.",
    subtitle:
      "Якщо хочеш мене привітати, ось найкращий варіант: витрать близько 40 хвилин і допоможи врятувати чиєсь життя.",
    primaryCta: "Знайти центр донації",
    secondaryCta: "Переглянути FAQ",
    pledge: "Якщо хвилюєшся, я піду з тобою.",
    stats: [
      { value: "30–40 хв", label: "від входу до завершення" },
      { value: "1 візит", label: "може допомогти кільком людям" },
      { value: "0 подарунків", label: "мені справді не потрібно" },
    ],
    whyTitle: "Чому краще так, ніж подарунок?",
    whyText:
      "Мені не потрібні зайві речі. А донорство крові це конкретна, швидка і справді корисна допомога. Для дня народження це набагато цінніше.",
    stepsTitle: "Як це відбувається",
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
      "Для української версії показуємо перевірені центри з DonorUA для Києва та Одеси.",
    faqTitle: "FAQ",
    faq: [
      ["Це страшно?", "Зазвичай ні. Це стандартна процедура, і персонал усе пояснює."],
      ["Боляче?", "Лише короткий момент з голкою."],
      ["Можна поїсти перед цим?", "Так. Легка їжа і вода навіть бажані."],
      ["Каву?", "Краще вже після донації."],
      ["Не можеш здати?", "Поділись сторінкою або приведи когось, хто може."],
    ],
    footer:
      "Якщо здаси кров, надішли мені селфі. Я дуже пишатимусь тобою.",
  },
};

const uaCenters = [
  {
    city: "Kyiv",
    title: "Київський міський центр крові",
    text: "Основний міський центр у Києві на DonorUA.",
    href: "https://www.donor.ua/centers/1",
  },
  {
    city: "Kyiv",
    title: "ОХМАТДИТ",
    text: "Донорський центр НДСЛ ОХМАТДИТ.",
    href: "https://www.donor.ua/centers/3",
  },
  {
    city: "Kyiv",
    title: "ФЕОФАНІЯ",
    text: "Центр трансфузіології клінічної лікарні ФЕОФАНІЯ.",
    href: "https://www.donor.ua/centers/96",
  },
  {
    city: "Odesa",
    title: "Одеська обласна станція переливання крові",
    text: "Базовий центр для Одеси на DonorUA.",
    href: "https://www.donor.ua/centers/45",
  },
  {
    city: "Odesa",
    title: "Одеська обласна дитяча клінічна лікарня",
    text: "Відділення переливання крові в Одесі.",
    href: "https://www.donor.ua/centers/1447",
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
      label: locale === "uk" ? "Веб-пошук по місту" : "Web search by city",
      href: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      detail:
        locale === "uk"
          ? "Корисно, якщо офіційний сервіс у країні неочевидний."
          : "Useful when the country does not have one obvious national service.",
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

    if (!navigator.geolocation) return undefined;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (cancelled) return;

        setLocation((current) => ({
          ...current,
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          source: "geolocation",
        }));
      },
      () => {},
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 600000 },
    );

    return () => {
      cancelled = true;
    };
  }, [isAutoLocale, regionNames]);

  const centerCards =
    locale === "uk"
      ? uaCenters
      : getInternationalCenters(location, locale).map((item) => ({
          city: location.city || location.countryName || "Nearby",
          title: item.label,
          text: item.detail,
          href: item.href,
        }));

  const locationLabel = [location.city, location.countryName].filter(Boolean).join(", ");
  const centerKicker =
    locale === "uk"
      ? "Kyiv / Odesa"
      : locationLabel
        ? `Detected: ${locationLabel}`
        : "International";

  function handleLocaleSwitch() {
    setIsAutoLocale(false);
    setLocale(locale === "en" ? "uk" : "en");
  }

  return (
    html`
      <div className="page-shell">
        <div className="ambient ambient-left" />
        <div className="ambient ambient-right" />

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
              <h1>${t.title}</h1>
              <p className="lead">${t.subtitle}</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#centers">
                  ${t.primaryCta}
                </a>
                <a className="button button-secondary" href="#faq">
                  ${t.secondaryCta}
                </a>
              </div>

              <p className="pledge">${t.pledge}</p>
            </div>

            <aside className="impact-card">
              <div className="pulse" />
              <p className="impact-label">Impact</p>
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
          <section className="panel panel-story">
            <div>
              <p className="section-kicker">Why</p>
              <h2>${t.whyTitle}</h2>
            </div>
            <p>${t.whyText}</p>
          </section>

          <section className="panel">
            <p className="section-kicker">Process</p>
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
            <p className="section-kicker">Answers</p>
            <h2>${t.faqTitle}</h2>
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
          </section>
        </main>

        <footer className="footer-note">
          <p>${t.footer}</p>
        </footer>
      </div>
    `
  );
}

createRoot(document.getElementById("root")).render(React.createElement(App));
