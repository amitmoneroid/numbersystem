// Landing-page content for the translated home pages (/es/, /fr/, /de/, /pt/, /it/).
// English stays in src/pages/index.astro; every string below is written for the
// local search intent, including the long-scale terminology that differs from
// English (mil millones / milliard / Milliarde / mil milhões / miliardo).

import type { Locale } from './routing';

export interface LocalizedHome {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    badges: string[];
  };
  steps: {
    eyebrow: string;
    h2: string;
    lead: string;
    cards: { title: string; body: string; example: string }[];
    answerTitle: string;
    answer: string[];
  };
  scales: {
    eyebrow: string;
    h2: string;
    lead: string;
    columns: string[];
    rows: { power: string; local: string; english: string; value: string }[];
    warningTitle: string;
    warning: string;
    anchorsTitle: string;
    anchors: string[];
    anchorsNote: string;
  };
  table: {
    eyebrow: string;
    h2: string;
    lead: string;
    caption: string;
    columns: string[];
  };
  faq: {
    heading: string;
    intro: string;
    items: { q: string; a: string }[];
  };
  related: {
    eyebrow: string;
    h2: string;
    lead: string;
    links: { label: string; href: string }[];
  };
}

export const localizedHome: Record<Exclude<Locale, 'en'>, LocalizedHome> = {
  es: {
    metaTitle:
      'Conversor de sistemas numéricos — lakh, crore, millón y billón',
    metaDescription:
      'Convierte lakh, crore, millón y billón con expansión completa en palabras. Compara el sistema indio y el internacional con todas las escalas.',
    keywords:
      'conversor de sistemas numéricos, conversor de lakh a millón, crore a millón, tabla de conversión, mil millones, billón, sistema indio, sistema internacional',
    hero: {
      eyebrow: 'Gratis · Sin registro · Funciona sin conexión',
      h1: 'Conversor de sistemas numéricos (Number System Converter) — lakh, crore, millón y billón',
      lead: 'Convierte lakh, crore, millón y billón con expansión completa en palabras. Compara el sistema indio y el internacional lado a lado, con cada escala nombrada.',
      badges: [
        '13 escalas',
        'Indio ⇄ Internacional',
        'Palabras completas',
        'Funciona en tu navegador',
      ],
    },
    steps: {
      eyebrow: 'Paso a paso',
      h2: 'Cómo funciona el conversor de sistemas numéricos',
      lead: 'Dos reglas resuelven cualquier base: primero desarrolla los dígitos de origen en decimal con sus pesos posicionales; después divide de forma repetida hasta llegar a la base de destino. La calculadora de bases de la guía ejecuta ambos pasos y muestra cada línea.',
      cards: [
        {
          title: '1. Desarrolla en decimal',
          body: 'Multiplica cada dígito por la base elevada a su posición y suma los productos.',
          example: '1A.8₁₆ = 16 + 10 + 0,5 = 26,5',
        },
        {
          title: '2. Divide entre la base de destino',
          body: 'Divide la parte entera de forma repetida, anota cada resto y léelos de abajo hacia arriba.',
          example: '156 ÷ 2 → 10011100₂',
        },
        {
          title: '3. Comprueba el resultado',
          body: 'Vuelve a convertir con los pesos: 128 + 16 + 8 + 4 = 156. Las dos direcciones deben coincidir.',
          example: '10011100₂ = 156₁₀',
        },
      ],
      answerTitle: '¿Cómo se convierte 156 a binario paso a paso?',
      answer: [
        'Divide entre 2 y anota el resto: 156 ÷ 2 = 78 r0, 78 ÷ 2 = 39 r0, 39 ÷ 2 = 19 r1, 19 ÷ 2 = 9 r1, 9 ÷ 2 = 4 r1, 4 ÷ 2 = 2 r0, 2 ÷ 2 = 1 r0, 1 ÷ 2 = 0 r1. Leídos de abajo hacia arriba: <strong>10011100₂</strong>.',
        'Comprobación: 128 + 16 + 8 + 4 = 156. Usa la calculadora de bases de la guía para repetir el mismo cálculo con cualquier base.',
      ],
    },
    scales: {
      eyebrow: 'Escalas y nombres',
      h2: '¿Qué diferencia hay entre mil millones y un billón?',
      lead: 'En español se usa la escala larga: un billón es 10¹², no 10⁹. Para 10⁹ se dice mil millones. Esta tabla compara los nombres en español con los del sistema internacional en inglés.',
      columns: ['Potencia', 'Nombre en español', 'Inglés (escala corta)', 'Valor'],
      rows: [
        { power: '10³', local: 'mil', english: 'thousand', value: '1 000' },
        {
          power: '10⁵',
          local: 'cien mil',
          english: 'hundred thousand',
          value: '100 000',
        },
        {
          power: '10⁶',
          local: 'un millón',
          english: 'one million',
          value: '1 000 000',
        },
        {
          power: '10⁷',
          local: 'diez millones',
          english: 'ten million',
          value: '10 000 000',
        },
        {
          power: '10⁹',
          local: 'mil millones',
          english: 'one billion',
          value: '1 000 000 000',
        },
        {
          power: '10¹²',
          local: 'un billón',
          english: 'one trillion',
          value: '1 000 000 000 000',
        },
        {
          power: '10¹⁵',
          local: 'mil billones',
          english: 'one quadrillion',
          value: '1 000 000 000 000 000',
        },
      ],
      warningTitle: 'Cuidado con el falso amigo «billion»',
      warning:
        'El «billion» inglés son 10⁹ (mil millones), no un billón. Al traducir cifras de prensa o informes financieros, comprueba siempre la escala: «one billion dollars» son mil millones de dólares, mientras que «un billón de dólares» son un millón de millones.',
      anchorsTitle: 'Equivalencias que conviene memorizar',
      anchors: [
        '1 millón = 10 lakh',
        '1 000 millones (1 billion) = 1 arab = 100 crore',
        '1 billón = 1 lakh crore',
        '1 lakh = 100 000',
      ],
      anchorsNote:
        'lakh = 10⁵ (cien mil), crore = 10⁷ (diez millones) y arab = 10⁹ (mil millones) son unidades del sistema indio.',
    },
    table: {
      eyebrow: 'Tabla rápida',
      h2: 'Tabla de conversión de sistemas numéricos (0–15)',
      lead: 'Los primeros dieciséis valores en las cuatro bases de la informática. Lee una fila y tendrás el mismo número en decimal, binario, octal y hexadecimal.',
      caption: 'Números del 0 al 15 en decimal, binario, octal y hexadecimal',
      columns: ['Decimal', 'Binario (2)', 'Octal (8)', 'Hexadecimal (16)'],
    },
    faq: {
      heading: 'Preguntas frecuentes sobre sistemas numéricos',
      intro:
        'Respuestas breves sobre binario, decimal y hexadecimal, y sobre la diferencia entre mil millones y billón.',
      items: [
        {
          q: '¿Cómo se convierte un número decimal a binario?',
          a: 'Divide el número entre 2 y anota el resto. Repite con el cociente hasta que llegue a cero y lee los restos de abajo hacia arriba. Por ejemplo, 156₁₀ produce los restos 0, 0, 1, 1, 1, 0, 0, 1, así que <strong>156₁₀ = 10011100₂</strong>.',
        },
        {
          q: '¿Cuánto es un billón en español?',
          a: 'Un billón son 10¹², es decir, un millón de millones (1 000 000 000 000). No lo confundas con el «billion» inglés, que equivale a mil millones (10⁹).',
        },
        {
          q: '¿Cuántos ceros tiene mil millones?',
          a: 'Mil millones (10⁹) se escriben 1 000 000 000 y tienen nueve ceros. En inglés se llama «one billion».',
        },
        {
          q: '¿Cómo se pasa de hexadecimal a decimal?',
          a: 'Multiplica cada cifra por 16 elevado a su posición y suma los resultados. Para 1A.8₁₆: 1 × 16 + 10 + 8/16 = 26,5. El conversor muestra el desarrollo completo.',
        },
        {
          q: '¿Cuáles son los cuatro sistemas de numeración básicos?',
          a: 'Binario (base 2, dígitos 0–1), octal (base 8, 0–7), decimal (base 10, 0–9) y hexadecimal (base 16, 0–9 y A–F). La calculadora de bases de la guía admite además cualquier base hasta 36.',
        },
        {
          q: '¿Cuánto son 1 lakh y 1 crore?',
          a: '1 lakh = 100 000 (cien mil) y 1 crore = 10 000 000 (diez millones). Son unidades del sistema indio: 1 millón equivale a 10 lakh y 100 crore equivalen a mil millones.',
        },
      ],
    },
    related: {
      eyebrow: 'Sigue aprendiendo',
      h2: 'Guías completas del conversor de sistemas numéricos',
      lead: 'Las guías detalladas están en inglés, con ejemplos resueltos y tablas descargables.',
      links: [
        {
          label: 'Conversor con pasos',
          href: '/knowledge-catalog/number-system-converter-with-steps/',
        },
        {
          label: 'Tabla de conversión completa',
          href: '/knowledge-catalog/number-system-conversion-table/',
        },
        {
          label: 'PDF de conversión imprimible',
          href: '/knowledge-catalog/number-system-conversion-pdf/',
        },
        {
          label: 'Calculadora de bases',
          href: '/knowledge-catalog/base-converter-calculator/',
        },
      ],
    },
  },

  fr: {
    metaTitle:
      'Convertisseur de systèmes de numération — lakh, crore, million et milliard',
    metaDescription:
      'Convertissez lakh, crore, million et milliard avec l’expansion complète en mots. Comparez les systèmes indien et international, échelle par échelle.',
    keywords:
      'convertisseur de systèmes de numération, lakh en million, crore en million, tableau de conversion, milliard, billion, système indien, système international',
    hero: {
      eyebrow: 'Gratuit · Sans inscription · Fonctionne hors ligne',
      h1: 'Convertisseur de systèmes de numération (Number System Converter) — lakh, crore, million et milliard',
      lead: 'Convertissez lakh, crore, million et milliard avec l’expansion complète en mots. Comparez les systèmes indien et international côte à côte, avec chaque échelle nommée.',
      badges: [
        '13 échelles',
        'Indien ⇄ International',
        'Mots complets',
        'Dans votre navigateur',
      ],
    },
    steps: {
      eyebrow: 'Étape par étape',
      h2: 'Comment fonctionne le convertisseur de systèmes de numération',
      lead: 'Deux règles suffisent : développez d’abord les chiffres de départ en décimal avec leurs poids de position, puis divisez successivement jusqu’à la base d’arrivée. Le convertisseur de bases du guide exécute les deux et affiche chaque ligne.',
      cards: [
        {
          title: '1. Développer en décimal',
          body: 'Multipliez chaque chiffre par la base élevée à sa position, puis additionnez les produits.',
          example: '1A.8₁₆ = 16 + 10 + 0,5 = 26,5',
        },
        {
          title: '2. Diviser par la base d’arrivée',
          body: 'Divisez la partie entière de façon répétée, notez chaque reste et lisez-les de bas en haut.',
          example: '156 ÷ 2 → 10011100₂',
        },
        {
          title: '3. Vérifier le résultat',
          body: 'Reconvertissez avec les poids : 128 + 16 + 8 + 4 = 156. Les deux sens doivent concorder.',
          example: '10011100₂ = 156₁₀',
        },
      ],
      answerTitle: 'Comment convertir 156 en binaire, étape par étape ?',
      answer: [
        'Divisez par 2 en notant chaque reste : 156 ÷ 2 = 78 r0, 78 ÷ 2 = 39 r0, 39 ÷ 2 = 19 r1, 19 ÷ 2 = 9 r1, 9 ÷ 2 = 4 r1, 4 ÷ 2 = 2 r0, 2 ÷ 2 = 1 r0, 1 ÷ 2 = 0 r1. De bas en haut : <strong>10011100₂</strong>.',
        'Vérification : 128 + 16 + 8 + 4 = 156. Utilisez le convertisseur de bases du guide pour rejouer le calcul dans n’importe quelle base.',
      ],
    },
    scales: {
      eyebrow: 'Échelles et noms',
      h2: 'Quelle différence entre un million, un milliard et un billion ?',
      lead: 'Le français utilise l’échelle longue : un milliard vaut 10⁹ et un billion 10¹². L’anglais emploie l’échelle courte, où « billion » vaut 10⁹. Ce tableau compare les deux.',
      columns: ['Puissance', 'Nom en français', 'Anglais (échelle courte)', 'Valeur'],
      rows: [
        { power: '10³', local: 'mille', english: 'thousand', value: '1 000' },
        {
          power: '10⁵',
          local: 'cent mille',
          english: 'hundred thousand',
          value: '100 000',
        },
        {
          power: '10⁶',
          local: 'un million',
          english: 'one million',
          value: '1 000 000',
        },
        {
          power: '10⁷',
          local: 'dix millions',
          english: 'ten million',
          value: '10 000 000',
        },
        {
          power: '10⁹',
          local: 'un milliard',
          english: 'one billion',
          value: '1 000 000 000',
        },
        {
          power: '10¹²',
          local: 'un billion',
          english: 'one trillion',
          value: '1 000 000 000 000',
        },
        {
          power: '10¹⁵',
          local: 'un billiard',
          english: 'one quadrillion',
          value: '1 000 000 000 000 000',
        },
      ],
      warningTitle: 'Le piège du faux ami « billion »',
      warning:
        'Un « billion » français vaut 10¹², soit mille milliards. Le « billion » anglais vaut 10⁹, soit un milliard. Une traduction mot à mot peut donc multiplier une somme par mille : vérifiez toujours l’échelle du document source.',
      anchorsTitle: 'Les équivalences à retenir',
      anchors: [
        '1 million = 10 lakh',
        '1 milliard (1 billion en anglais) = 1 arab = 100 crore',
        '1 billion = 1 lakh crore',
        '1 lakh = 100 000',
      ],
      anchorsNote:
        'lakh = 10⁵ (cent mille), crore = 10⁷ (dix millions) et arab = 10⁹ (un milliard) sont des unités du système indien.',
    },
    table: {
      eyebrow: 'Tableau rapide',
      h2: 'Tableau de conversion des systèmes de numération (0–15)',
      lead: 'Les seize premières valeurs dans les quatre bases de l’informatique. Lisez une ligne pour obtenir le même nombre en décimal, binaire, octal et hexadécimal.',
      caption: 'Nombres de 0 à 15 en décimal, binaire, octal et hexadécimal',
      columns: ['Décimal', 'Binaire (2)', 'Octal (8)', 'Hexadécimal (16)'],
    },
    faq: {
      heading: 'Questions fréquentes sur les systèmes de numération',
      intro:
        'Des réponses courtes sur le binaire, le décimal, l’hexadécimal et la différence entre milliard et billion.',
      items: [
        {
          q: 'Comment convertir un nombre décimal en binaire ?',
          a: 'Divisez le nombre par 2 en notant chaque reste. Répétez avec le quotient jusqu’à zéro, puis lisez les restes de bas en haut. Pour 156₁₀, les restes sont 0, 0, 1, 1, 1, 0, 0, 1 : <strong>156₁₀ = 10011100₂</strong>.',
        },
        {
          q: 'Quelle est la différence entre un milliard et un billion ?',
          a: 'En français, un milliard vaut 10⁹ (1 000 000 000) et un billion vaut 10¹² (1 000 000 000 000). En anglais, « billion » correspond au milliard français.',
        },
        {
          q: 'Combien de zéros compte un milliard ?',
          a: 'Un milliard (10⁹) s’écrit 1 000 000 000 : neuf zéros. Le billion français (10¹²) en compte douze.',
        },
        {
          q: 'Comment convertir de l’hexadécimal en décimal ?',
          a: 'Multipliez chaque chiffre par 16 élevé à sa position, puis additionnez. Pour 1A.8₁₆ : 1 × 16 + 10 + 8/16 = 26,5. Le convertisseur affiche le développement complet.',
        },
        {
          q: 'Quels sont les quatre systèmes de numération de base ?',
          a: 'Binaire (base 2, chiffres 0–1), octal (base 8, 0–7), décimal (base 10, 0–9) et hexadécimal (base 16, 0–9 et A–F). Le convertisseur de bases du guide accepte en plus toute base jusqu’à 36.',
        },
        {
          q: 'Combien valent 1 lakh et 1 crore ?',
          a: '1 lakh = 100 000 (cent mille) et 1 crore = 10 000 000 (dix millions), dans le système indien. Un million équivaut à 10 lakh et 100 crore à un milliard.',
        },
      ],
    },
    related: {
      eyebrow: 'Pour aller plus loin',
      h2: 'Guides complets sur le convertisseur de systèmes de numération',
      lead: 'Les guides détaillés sont en anglais, avec des exemples résolus et des tableaux à imprimer.',
      links: [
        {
          label: 'Convertisseur avec étapes',
          href: '/knowledge-catalog/number-system-converter-with-steps/',
        },
        {
          label: 'Tableau de conversion complet',
          href: '/knowledge-catalog/number-system-conversion-table/',
        },
        {
          label: 'PDF de conversion à imprimer',
          href: '/knowledge-catalog/number-system-conversion-pdf/',
        },
        {
          label: 'Calculatrice de bases',
          href: '/knowledge-catalog/base-converter-calculator/',
        },
      ],
    },
  },

  de: {
    metaTitle:
      'Zahlensystem-Umrechner — Lakh, Crore, Million und Milliarde',
    metaDescription:
      'Rechnen Sie Lakh, Crore, Million und Milliarde mit vollständiger Wortexpansion um. Vergleichen Sie das indische und das internationale System über alle Skalen.',
    keywords:
      'Zahlensystem umrechnen, Zahlensystem Rechner, Lakh in Million, Crore in Million, Umrechnungstabelle, Milliarde, Billion, indisches System, internationales System',
    hero: {
      eyebrow: 'Kostenlos · Ohne Anmeldung · Funktioniert offline',
      h1: 'Zahlensystem-Umrechner (Number System Converter) — Lakh, Crore, Million und Milliarde',
      lead: 'Rechnen Sie Lakh, Crore, Million und Milliarde mit vollständiger Wortexpansion um. Vergleichen Sie das indische und das internationale System nebeneinander, mit jeder benannten Skala.',
      badges: [
        '13 Skalen',
        'Indisch ⇄ International',
        'Vollständige Wörter',
        'Läuft im Browser',
      ],
    },
    steps: {
      eyebrow: 'Schritt für Schritt',
      h2: 'Wie funktioniert der Zahlensystem-Umrechner?',
      lead: 'Zwei Regeln genügen: Zuerst werden die Ausgangsziffern mit ihren Stellenwerten in Dezimal umgerechnet, dann wird so oft durch die Zielbasis geteilt, bis der Quotient null ist. Der Basisrechner in der Anleitung führt beides aus und zeigt jede Zeile.',
      cards: [
        {
          title: '1. In Dezimal entwickeln',
          body: 'Multiplizieren Sie jede Ziffer mit der Basis hoch ihrer Position und addieren Sie die Produkte.',
          example: '1A.8₁₆ = 16 + 10 + 0,5 = 26,5',
        },
        {
          title: '2. Durch die Zielbasis teilen',
          body: 'Teilen Sie den ganzzahligen Teil wiederholt, notieren Sie jeden Rest und lesen Sie ihn von unten nach oben.',
          example: '156 ÷ 2 → 10011100₂',
        },
        {
          title: '3. Ergebnis prüfen',
          body: 'Rechnen Sie mit den Stellenwerten zurück: 128 + 16 + 8 + 4 = 156. Beide Richtungen müssen übereinstimmen.',
          example: '10011100₂ = 156₁₀',
        },
      ],
      answerTitle: 'Wie rechnet man 156 schrittweise in Binär um?',
      answer: [
        'Teilen Sie durch 2 und notieren Sie den Rest: 156 ÷ 2 = 78 r0, 78 ÷ 2 = 39 r0, 39 ÷ 2 = 19 r1, 19 ÷ 2 = 9 r1, 9 ÷ 2 = 4 r1, 4 ÷ 2 = 2 r0, 2 ÷ 2 = 1 r0, 1 ÷ 2 = 0 r1. Von unten nach oben gelesen: <strong>10011100₂</strong>.',
        'Prüfung: 128 + 16 + 8 + 4 = 156. Der Basisrechner in der Anleitung zeigt dieselbe Rechnung für jede Basis.',
      ],
    },
    scales: {
      eyebrow: 'Skalen und Namen',
      h2: 'Was ist der Unterschied zwischen Million, Milliarde und Billion?',
      lead: 'Im Deutschen gilt die lange Skala: Eine Milliarde ist 10⁹, eine Billion 10¹². Englisch verwendet die kurze Skala, in der „billion“ 10⁹ bedeutet. Die Tabelle stellt beide gegenüber.',
      columns: ['Potenz', 'Deutscher Name', 'Englisch (kurze Skala)', 'Wert'],
      rows: [
        { power: '10³', local: 'Tausend', english: 'thousand', value: '1 000' },
        {
          power: '10⁵',
          local: 'hunderttausend',
          english: 'hundred thousand',
          value: '100 000',
        },
        {
          power: '10⁶',
          local: 'eine Million',
          english: 'one million',
          value: '1 000 000',
        },
        {
          power: '10⁷',
          local: 'zehn Millionen',
          english: 'ten million',
          value: '10 000 000',
        },
        {
          power: '10⁹',
          local: 'eine Milliarde',
          english: 'one billion',
          value: '1 000 000 000',
        },
        {
          power: '10¹²',
          local: 'eine Billion',
          english: 'one trillion',
          value: '1 000 000 000 000',
        },
        {
          power: '10¹⁵',
          local: 'eine Billiarde',
          english: 'one quadrillion',
          value: '1 000 000 000 000 000',
        },
      ],
      warningTitle: 'Vorsicht vor dem falschen Freund „Billion“',
      warning:
        'Eine deutsche Billion ist 10¹², also tausend Milliarden. Die englische „billion“ ist 10⁹, also eine Milliarde. Eine wörtliche Übersetzung kann Beträge um den Faktor 1.000 verändern – prüfen Sie immer die Skala der Quelle.',
      anchorsTitle: 'Diese Umrechnungen sollten Sie kennen',
      anchors: [
        '1 Million = 10 lakh',
        '1 Milliarde = 1 arab = 100 crore',
        '1 Billion = 1 lakh crore',
        '1 lakh = 100 000',
      ],
      anchorsNote:
        'lakh = 10⁵ (hunderttausend), crore = 10⁷ (zehn Millionen) und arab = 10⁹ (eine Milliarde) sind Einheiten des indischen Systems.',
    },
    table: {
      eyebrow: 'Schnelltabelle',
      h2: 'Umrechnungstabelle für Zahlensysteme (0–15)',
      lead: 'Die ersten sechzehn Werte in den vier Basen der Informatik. Eine Zeile liefert dieselbe Zahl in Dezimal, Binär, Oktal und Hexadezimal.',
      caption: 'Zahlen 0 bis 15 in Dezimal, Binär, Oktal und Hexadezimal',
      columns: ['Dezimal', 'Binär (2)', 'Oktal (8)', 'Hexadezimal (16)'],
    },
    faq: {
      heading: 'Häufige Fragen zu Zahlensystemen',
      intro:
        'Kurze Antworten zu Binär, Dezimal und Hexadezimal sowie zum Unterschied zwischen Milliarde und Billion.',
      items: [
        {
          q: 'Wie rechnet man eine Dezimalzahl in Binär um?',
          a: 'Teilen Sie die Zahl durch 2 und notieren Sie den Rest. Wiederholen Sie das mit dem Quotienten bis null und lesen Sie die Reste von unten nach oben. Bei 156₁₀ sind es 0, 0, 1, 1, 1, 0, 0, 1 – also <strong>156₁₀ = 10011100₂</strong>.',
        },
        {
          q: 'Was ist der Unterschied zwischen Milliarde und Billion?',
          a: 'Eine Milliarde sind 10⁹ (1 000 000 000), eine Billion 10¹² (1 000 000 000 000). Die englische „billion“ entspricht der deutschen Milliarde.',
        },
        {
          q: 'Wie viele Nullen hat eine Milliarde?',
          a: 'Eine Milliarde (10⁹) schreibt man als 1 000 000 000 und hat neun Nullen. Eine Billion (10¹²) hat zwölf Nullen.',
        },
        {
          q: 'Wie rechnet man Hexadezimal in Dezimal um?',
          a: 'Multiplizieren Sie jede Ziffer mit 16 hoch ihrer Position und addieren Sie die Ergebnisse. Für 1A.8₁₆: 1 × 16 + 10 + 8/16 = 26,5. Der Rechner zeigt den vollständigen Rechenweg.',
        },
        {
          q: 'Welche vier Zahlensysteme gibt es in der Informatik?',
          a: 'Binär (Basis 2, Ziffern 0–1), Oktal (Basis 8, 0–7), Dezimal (Basis 10, 0–9) und Hexadezimal (Basis 16, 0–9 und A–F). Der Basisrechner in der Anleitung unterstützt außerdem jede Basis bis 36.',
        },
        {
          q: 'Wie viel sind 1 lakh und 1 crore?',
          a: '1 lakh = 100 000 (hunderttausend) und 1 crore = 10 000 000 (zehn Millionen) im indischen System. Eine Million entspricht 10 lakh, 100 crore entsprechen einer Milliarde.',
        },
      ],
    },
    related: {
      eyebrow: 'Weiterlernen',
      h2: 'Ausführliche Anleitungen zum Zahlensystem-Umrechner',
      lead: 'Die ausführlichen Anleitungen sind auf Englisch, mit gerechneten Beispielen und Tabellen zum Ausdrucken.',
      links: [
        {
          label: 'Umrechner mit Rechenweg',
          href: '/knowledge-catalog/number-system-converter-with-steps/',
        },
        {
          label: 'Vollständige Umrechnungstabelle',
          href: '/knowledge-catalog/number-system-conversion-table/',
        },
        {
          label: 'Umrechnungs-PDF zum Ausdrucken',
          href: '/knowledge-catalog/number-system-conversion-pdf/',
        },
        {
          label: 'Basisrechner',
          href: '/knowledge-catalog/base-converter-calculator/',
        },
      ],
    },
  },

  pt: {
    metaTitle:
      'Conversor de sistemas numéricos — lakh, crore, milhão e bilhão',
    metaDescription:
      'Converta lakh, crore, milhão e bilhão com expansão completa em palavras. Compare o sistema indiano e o internacional em todas as escalas.',
    keywords:
      'conversor de sistemas numéricos, lakh para milhão, crore para milhão, tabela de conversão, mil milhões, bilhão, bilião, sistema indiano, sistema internacional',
    hero: {
      eyebrow: 'Grátis · Sem registo · Funciona offline',
      h1: 'Conversor de sistemas numéricos (Number System Converter) — lakh, crore, milhão e bilhão',
      lead: 'Converta lakh, crore, milhão e bilhão com expansão completa em palavras. Compare o sistema indiano e o internacional lado a lado, com cada escala nomeada.',
      badges: [
        '13 escalas',
        'Indiano ⇄ Internacional',
        'Palavras completas',
        'Funciona no navegador',
      ],
    },
    steps: {
      eyebrow: 'Passo a passo',
      h2: 'Como funciona o conversor de sistemas numéricos',
      lead: 'Duas regras resolvem qualquer base: primeiro expanda os dígitos de origem em decimal com os respetivos pesos posicionais; depois divida repetidamente até chegar à base de destino. O conversor de bases do guia executa os dois passos e mostra cada linha.',
      cards: [
        {
          title: '1. Expandir em decimal',
          body: 'Multiplique cada dígito pela base elevada à sua posição e some os produtos.',
          example: '1A.8₁₆ = 16 + 10 + 0,5 = 26,5',
        },
        {
          title: '2. Dividir pela base de destino',
          body: 'Divida a parte inteira repetidamente, registe cada resto e leia-os de baixo para cima.',
          example: '156 ÷ 2 → 10011100₂',
        },
        {
          title: '3. Conferir o resultado',
          body: 'Converta de volta com os pesos: 128 + 16 + 8 + 4 = 156. Os dois sentidos têm de coincidir.',
          example: '10011100₂ = 156₁₀',
        },
      ],
      answerTitle: 'Como converter 156 para binário passo a passo?',
      answer: [
        'Divida por 2 e registe o resto: 156 ÷ 2 = 78 r0, 78 ÷ 2 = 39 r0, 39 ÷ 2 = 19 r1, 19 ÷ 2 = 9 r1, 9 ÷ 2 = 4 r1, 4 ÷ 2 = 2 r0, 2 ÷ 2 = 1 r0, 1 ÷ 2 = 0 r1. Lidos de baixo para cima: <strong>10011100₂</strong>.',
        'Confirmação: 128 + 16 + 8 + 4 = 156. Use o conversor de bases do guia para repetir o cálculo em qualquer base.',
      ],
    },
    scales: {
      eyebrow: 'Escalas e nomes',
      h2: 'Qual é a diferença entre milhão, mil milhões e bilião?',
      lead: 'Portugal usa a escala longa: mil milhões são 10⁹ e um bilião é 10¹². O Brasil usa a escala curta: um bilhão é 10⁹ e um trilhão é 10¹². A tabela compara as duas normas com o inglês.',
      columns: ['Potência', 'Nome em português', 'Inglês (escala curta)', 'Valor'],
      rows: [
        { power: '10³', local: 'mil', english: 'thousand', value: '1 000' },
        {
          power: '10⁵',
          local: 'cem mil',
          english: 'hundred thousand',
          value: '100 000',
        },
        {
          power: '10⁶',
          local: 'um milhão',
          english: 'one million',
          value: '1 000 000',
        },
        {
          power: '10⁷',
          local: 'dez milhões',
          english: 'ten million',
          value: '10 000 000',
        },
        {
          power: '10⁹',
          local: 'mil milhões (PT) / um bilhão (BR)',
          english: 'one billion',
          value: '1 000 000 000',
        },
        {
          power: '10¹²',
          local: 'um bilião (PT) / um trilhão (BR)',
          english: 'one trillion',
          value: '1 000 000 000 000',
        },
        {
          power: '10¹⁵',
          local: 'mil biliões (PT) / um quatrilhão (BR)',
          english: 'one quadrillion',
          value: '1 000 000 000 000 000',
        },
      ],
      warningTitle: 'Atenção à diferença entre Portugal e Brasil',
      warning:
        'Em Portugal, «bilião» é 10¹² e «mil milhões» é 10⁹. No Brasil, «bilhão» é 10⁹ e «trilhão» é 10¹². Um texto traduzido do inglês pode parecer igual nos dois países, mas representar valores mil vezes diferentes: confirme sempre a origem.',
      anchorsTitle: 'Equivalências para memorizar',
      anchors: [
        '1 milhão = 10 lakh',
        '1 bilhão (BR) / mil milhões (PT) = 1 arab = 100 crore',
        '1 bilião (PT) / 1 trilhão (BR) = 1 lakh crore',
        '1 lakh = 100 000',
      ],
      anchorsNote:
        'lakh = 10⁵ (cem mil), crore = 10⁷ (dez milhões) e arab = 10⁹ (mil milhões) são unidades do sistema indiano.',
    },
    table: {
      eyebrow: 'Tabela rápida',
      h2: 'Tabela de conversão de sistemas numéricos (0–15)',
      lead: 'Os primeiros dezasseis valores nas quatro bases da informática. Leia uma linha e obtém o mesmo número em decimal, binário, octal e hexadecimal.',
      caption: 'Números de 0 a 15 em decimal, binário, octal e hexadecimal',
      columns: ['Decimal', 'Binário (2)', 'Octal (8)', 'Hexadecimal (16)'],
    },
    faq: {
      heading: 'Perguntas frequentes sobre sistemas numéricos',
      intro:
        'Respostas curtas sobre binário, decimal e hexadecimal, e sobre a diferença entre mil milhões, bilhão e bilião.',
      items: [
        {
          q: 'Como converter um número decimal para binário?',
          a: 'Divida o número por 2 e registe o resto. Repita com o quociente até chegar a zero e leia os restos de baixo para cima. Para 156₁₀, os restos são 0, 0, 1, 1, 1, 0, 0, 1: <strong>156₁₀ = 10011100₂</strong>.',
        },
        {
          q: 'Qual é a diferença entre mil milhões e um bilião?',
          a: 'Mil milhões são 10⁹ (1 000 000 000). Em Portugal, um bilião é 10¹²; no Brasil, «bilhão» é 10⁹ e «trilhão» é 10¹². Confirme sempre a variante do texto.',
        },
        {
          q: 'Quantos zeros tem um bilião?',
          a: 'Depende da norma: no Brasil, um bilhão (10⁹) tem nove zeros; em Portugal, um bilião (10¹²) tem doze zeros.',
        },
        {
          q: 'Como converter hexadecimal para decimal?',
          a: 'Multiplique cada dígito por 16 elevado à sua posição e some os resultados. Para 1A.8₁₆: 1 × 16 + 10 + 8/16 = 26,5. O conversor mostra o desenvolvimento completo.',
        },
        {
          q: 'Quais são os quatro sistemas de numeração básicos?',
          a: 'Binário (base 2, dígitos 0–1), octal (base 8, 0–7), decimal (base 10, 0–9) e hexadecimal (base 16, 0–9 e A–F). O conversor de bases do guia aceita ainda qualquer base até 36.',
        },
        {
          q: 'Quanto valem 1 lakh e 1 crore?',
          a: '1 lakh = 100 000 (cem mil) e 1 crore = 10 000 000 (dez milhões). Um milhão equivale a 10 lakh e 100 crore equivalem a mil milhões.',
        },
      ],
    },
    related: {
      eyebrow: 'Continuar a aprender',
      h2: 'Guias completos do conversor de sistemas numéricos',
      lead: 'Os guias detalhados estão em inglês, com exemplos resolvidos e tabelas para imprimir.',
      links: [
        {
          label: 'Conversor com passos',
          href: '/knowledge-catalog/number-system-converter-with-steps/',
        },
        {
          label: 'Tabela de conversão completa',
          href: '/knowledge-catalog/number-system-conversion-table/',
        },
        {
          label: 'PDF de conversão para imprimir',
          href: '/knowledge-catalog/number-system-conversion-pdf/',
        },
        {
          label: 'Calculadora de bases',
          href: '/knowledge-catalog/base-converter-calculator/',
        },
      ],
    },
  },

  it: {
    metaTitle:
      'Convertitore di sistemi numerici — lakh, crore, milione e miliardo',
    metaDescription:
      'Converti lakh, crore, milione e miliardo con l’espansione completa in parole. Confronta il sistema indiano e quello internazionale scala per scala.',
    keywords:
      'convertitore di sistemi numerici, lakh in milione, crore in milione, tabella di conversione, miliardo, bilione, sistema indiano, sistema internazionale',
    hero: {
      eyebrow: 'Gratis · Senza registrazione · Funziona offline',
      h1: 'Convertitore di sistemi numerici (Number System Converter) — lakh, crore, milione e miliardo',
      lead: 'Converti lakh, crore, milione e miliardo con l’espansione completa in parole. Confronta il sistema indiano e quello internazionale fianco a fianco, con ogni scala nominata.',
      badges: [
        '13 scale',
        'Indiano ⇄ Internazionale',
        'Parole complete',
        'Nel browser',
      ],
    },
    steps: {
      eyebrow: 'Passo per passo',
      h2: 'Come funziona il convertitore di sistemi numerici',
      lead: 'Due regole bastano: prima si sviluppano le cifre di partenza in decimale con i pesi posizionali, poi si divide ripetutamente fino alla base di arrivo. Il convertitore di basi della guida esegue entrambi i passaggi e mostra ogni riga.',
      cards: [
        {
          title: '1. Sviluppa in decimale',
          body: 'Moltiplica ogni cifra per la base elevata alla sua posizione e somma i prodotti.',
          example: '1A.8₁₆ = 16 + 10 + 0,5 = 26,5',
        },
        {
          title: '2. Dividi per la base di arrivo',
          body: 'Dividi ripetutamente la parte intera, annota ogni resto e leggili dal basso verso l’alto.',
          example: '156 ÷ 2 → 10011100₂',
        },
        {
          title: '3. Verifica il risultato',
          body: 'Riconverti con i pesi: 128 + 16 + 8 + 4 = 156. Le due direzioni devono coincidere.',
          example: '10011100₂ = 156₁₀',
        },
      ],
      answerTitle: 'Come si converte 156 in binario passo per passo?',
      answer: [
        'Dividi per 2 e annota il resto: 156 ÷ 2 = 78 r0, 78 ÷ 2 = 39 r0, 39 ÷ 2 = 19 r1, 19 ÷ 2 = 9 r1, 9 ÷ 2 = 4 r1, 4 ÷ 2 = 2 r0, 2 ÷ 2 = 1 r0, 1 ÷ 2 = 0 r1. Letti dal basso verso l’alto: <strong>10011100₂</strong>.',
        'Verifica: 128 + 16 + 8 + 4 = 156. Usa il convertitore di basi della guida per ripetere il calcolo in qualsiasi base.',
      ],
    },
    scales: {
      eyebrow: 'Scale e nomi',
      h2: 'Qual è la differenza tra milione, miliardo e bilione?',
      lead: 'L’italiano usa la scala lunga: un miliardo è 10⁹ e un bilione è 10¹². L’inglese usa la scala corta, in cui «billion» vale 10⁹. La tabella confronta le due convenzioni.',
      columns: ['Potenza', 'Nome italiano', 'Inglese (scala corta)', 'Valore'],
      rows: [
        { power: '10³', local: 'mille', english: 'thousand', value: '1 000' },
        {
          power: '10⁵',
          local: 'centomila',
          english: 'hundred thousand',
          value: '100 000',
        },
        {
          power: '10⁶',
          local: 'un milione',
          english: 'one million',
          value: '1 000 000',
        },
        {
          power: '10⁷',
          local: 'dieci milioni',
          english: 'ten million',
          value: '10 000 000',
        },
        {
          power: '10⁹',
          local: 'un miliardo',
          english: 'one billion',
          value: '1 000 000 000',
        },
        {
          power: '10¹²',
          local: 'un bilione',
          english: 'one trillion',
          value: '1 000 000 000 000',
        },
        {
          power: '10¹⁵',
          local: 'mille bilioni',
          english: 'one quadrillion',
          value: '1 000 000 000 000 000',
        },
      ],
      warningTitle: 'Attenzione al falso amico «bilione»',
      warning:
        'Un bilione italiano è 10¹², cioè mille miliardi. Il «billion» inglese è 10⁹, cioè un miliardo. Una traduzione letterale può moltiplicare una cifra per mille: controlla sempre la scala del testo di partenza.',
      anchorsTitle: 'Equivalenze da ricordare',
      anchors: [
        '1 milione = 10 lakh',
        '1 miliardo = 1 arab = 100 crore',
        '1 bilione = 1 lakh crore',
        '1 lakh = 100 000',
      ],
      anchorsNote:
        'lakh = 10⁵ (centomila), crore = 10⁷ (dieci milioni) e arab = 10⁹ (un miliardo) sono unità del sistema indiano.',
    },
    table: {
      eyebrow: 'Tabella rapida',
      h2: 'Tabella di conversione dei sistemi numerici (0–15)',
      lead: 'I primi sedici valori nelle quattro basi dell’informatica. Leggi una riga e ottieni lo stesso numero in decimale, binario, ottale ed esadecimale.',
      caption: 'Numeri da 0 a 15 in decimale, binario, ottale ed esadecimale',
      columns: ['Decimale', 'Binario (2)', 'Ottale (8)', 'Esadecimale (16)'],
    },
    faq: {
      heading: 'Domande frequenti sui sistemi numerici',
      intro:
        'Risposte brevi su binario, decimale ed esadecimale e sulla differenza tra miliardo e bilione.',
      items: [
        {
          q: 'Come si converte un numero decimale in binario?',
          a: 'Dividi il numero per 2 e annota il resto. Ripeti con il quoziente fino a zero e leggi i resti dal basso verso l’alto. Per 156₁₀ i resti sono 0, 0, 1, 1, 1, 0, 0, 1: <strong>156₁₀ = 10011100₂</strong>.',
        },
        {
          q: 'Qual è la differenza tra miliardo e bilione?',
          a: 'Un miliardo è 10⁹ (1 000 000 000), un bilione è 10¹² (1 000 000 000 000). Il «billion» inglese corrisponde al miliardo italiano.',
        },
        {
          q: 'Quanti zeri ha un miliardo?',
          a: 'Un miliardo (10⁹) si scrive 1 000 000 000 e ha nove zeri. Un bilione (10¹²) ne ha dodici.',
        },
        {
          q: 'Come si converte l’esadecimale in decimale?',
          a: 'Moltiplica ogni cifra per 16 elevato alla sua posizione e somma i risultati. Per 1A.8₁₆: 1 × 16 + 10 + 8/16 = 26,5. Il convertitore mostra lo sviluppo completo.',
        },
        {
          q: 'Quali sono i quattro sistemi numerici di base?',
          a: 'Binario (base 2, cifre 0–1), ottale (base 8, 0–7), decimale (base 10, 0–9) ed esadecimale (base 16, 0–9 e A–F). Il convertitore di basi della guida supporta anche qualsiasi base fino a 36.',
        },
        {
          q: 'Quanto valgono 1 lakh e 1 crore?',
          a: '1 lakh = 100 000 (centomila) e 1 crore = 10 000 000 (dieci milioni), nel sistema indiano. Un milione equivale a 10 lakh e 100 crore a un miliardo.',
        },
      ],
    },
    related: {
      eyebrow: 'Continua a imparare',
      h2: 'Guide complete sul convertitore di sistemi numerici',
      lead: 'Le guide dettagliate sono in inglese, con esempi risolti e tabelle da stampare.',
      links: [
        {
          label: 'Convertitore con passaggi',
          href: '/knowledge-catalog/number-system-converter-with-steps/',
        },
        {
          label: 'Tabella di conversione completa',
          href: '/knowledge-catalog/number-system-conversion-table/',
        },
        {
          label: 'PDF di conversione da stampare',
          href: '/knowledge-catalog/number-system-conversion-pdf/',
        },
        {
          label: 'Calcolatrice di basi',
          href: '/knowledge-catalog/base-converter-calculator/',
        },
      ],
    },
  },
};
