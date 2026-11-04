// Copy for the tabbed converter and the Indian ⇄ International naming tool on
// the translated home pages. Scale names follow each language's convention:
// Spanish/French/German/Italian use the long scale, Portuguese shows both the
// European and Brazilian names where they differ.

import type { Locale } from './routing';

export interface NamingUi {
  /** Locale key used to pick the number-to-words implementation. */
  localeCode: 'es' | 'fr' | 'de' | 'pt' | 'it';
  /** BCP-47 tag for Intl.NumberFormat. */
  numberLocale: string;
  /** Pre-filled amount, using the locale's decimal separator. */
  initialAmount: string;
  tabs: {
    aria: string;
    bases: string;
    naming: string;
  };
  eyebrow: string;
  heading: string;
  amount: string;
  from: string;
  to: string;
  swap: string;
  converted: string;
  tryLabel: string;
  error: string;
  errorLarge: string;
  representations: string;
  allIntlReps: string;
  allIndianReps: string;
  bestFit: string;
  intl: string;
  indian: string;
  intlSystem: string;
  indianSystem: string;
  copy: string;
  copied: string;
  copyValueAria: string;
  copyIntlAria: string;
  copyIndianAria: string;
  footnote: string;
  scales: {
    intl: {
      thousand: string;
      million: string;
      billion: string;
      trillion: string;
      quadrillion: string;
      quintillion: string;
    };
    indian: {
      lakh: string;
      crore: string;
      arab: string;
      kharab: string;
      neel: string;
      padma: string;
      shankh: string;
    };
  };
}

export const namingUi: Record<Exclude<Locale, 'en'>, NamingUi> = {
  es: {
    localeCode: 'es',
    numberLocale: 'es-ES',
    initialAmount: '1',
    tabs: {
      aria: 'Modo del conversor',
      bases: 'Bases 2–36',
      naming: 'Indio ⇄ Internacional',
    },
    eyebrow: 'Lakh, crore, million y billion',
    heading: 'Convierte entre el sistema indio y el internacional',
    amount: 'Cantidad',
    from: 'Desde',
    to: 'Hasta',
    swap: 'Intercambiar las escalas de origen y destino',
    converted: 'Valor convertido',
    tryLabel: 'Prueba:',
    error: 'Introduce un número válido.',
    errorLarge: 'El número es demasiado grande. Introduce un valor más pequeño.',
    representations: 'Todas las representaciones indias',
    allIntlReps: 'Todas las representaciones internacionales',
    allIndianReps: 'Todas las representaciones indias',
    bestFit: 'Mejor ajuste',
    intl: 'Internacional',
    indian: 'Indio',
    intlSystem: 'Sistema internacional',
    indianSystem: 'Sistema indio',
    copy: 'Copiar',
    copied: 'Copiado',
    copyValueAria: 'Copiar el valor convertido',
    copyIntlAria: 'Copiar el número internacional',
    copyIndianAria: 'Copiar el número indio',
    footnote:
      'El cálculo se hace en tu navegador. Acepta coma o punto como separador decimal.',
    scales: {
      intl: {
        thousand: 'mil',
        million: 'millón',
        billion: 'mil millones',
        trillion: 'billón',
        quadrillion: 'mil billones',
        quintillion: 'trillón',
      },
      indian: {
        lakh: 'lakh',
        crore: 'crore',
        arab: 'arab',
        kharab: 'kharab',
        neel: 'neel',
        padma: 'padma',
        shankh: 'shankh',
      },
    },
  },

  fr: {
    localeCode: 'fr',
    numberLocale: 'fr-FR',
    initialAmount: '1',
    tabs: {
      aria: 'Mode du convertisseur',
      bases: 'Bases 2–36',
      naming: 'Indien ⇄ International',
    },
    eyebrow: 'Lakh, crore, million et billion',
    heading: 'Convertissez entre le système indien et le système international',
    amount: 'Montant',
    from: 'De',
    to: 'Vers',
    swap: 'Inverser les échelles de départ et d’arrivée',
    converted: 'Valeur convertie',
    tryLabel: 'Essayez :',
    error: 'Saisissez un nombre valide.',
    errorLarge: 'Le nombre est trop grand. Saisissez une valeur plus petite.',
    representations: 'Toutes les représentations indiennes',
    allIntlReps: 'Toutes les représentations internationales',
    allIndianReps: 'Toutes les représentations indiennes',
    bestFit: 'Meilleure correspondance',
    intl: 'International',
    indian: 'Indien',
    intlSystem: 'Système international',
    indianSystem: 'Système indien',
    copy: 'Copier',
    copied: 'Copié',
    copyValueAria: 'Copier la valeur convertie',
    copyIntlAria: 'Copier le nombre international',
    copyIndianAria: 'Copier le nombre indien',
    footnote:
      'Le calcul se fait dans votre navigateur. La virgule et le point sont acceptés comme séparateur décimal.',
    scales: {
      intl: {
        thousand: 'mille',
        million: 'million',
        billion: 'milliard',
        trillion: 'billion',
        quadrillion: 'billiard',
        quintillion: 'trillion',
      },
      indian: {
        lakh: 'lakh',
        crore: 'crore',
        arab: 'arab',
        kharab: 'kharab',
        neel: 'neel',
        padma: 'padma',
        shankh: 'shankh',
      },
    },
  },

  de: {
    localeCode: 'de',
    numberLocale: 'de-DE',
    initialAmount: '1',
    tabs: {
      aria: 'Modus des Umrechners',
      bases: 'Basis 2–36',
      naming: 'Indisch ⇄ International',
    },
    eyebrow: 'Lakh, Crore, Million und Billion',
    heading: 'Zwischen indischem und internationalem System umrechnen',
    amount: 'Betrag',
    from: 'Von',
    to: 'Nach',
    swap: 'Ausgangs- und Zielskala tauschen',
    converted: 'Umgerechneter Wert',
    tryLabel: 'Ausprobieren:',
    error: 'Gib eine gültige Zahl ein.',
    errorLarge: 'Die Zahl ist zu groß. Gib einen kleineren Wert ein.',
    representations: 'Alle indischen Darstellungen',
    allIntlReps: 'Alle internationalen Darstellungen',
    allIndianReps: 'Alle indischen Darstellungen',
    bestFit: 'Beste Darstellung',
    intl: 'International',
    indian: 'Indisch',
    intlSystem: 'Internationales System',
    indianSystem: 'Indisches System',
    copy: 'Kopieren',
    copied: 'Kopiert',
    copyValueAria: 'Umgerechneten Wert kopieren',
    copyIntlAria: 'Internationale Zahl kopieren',
    copyIndianAria: 'Indische Zahl kopieren',
    footnote:
      'Die Berechnung erfolgt im Browser. Komma und Punkt werden als Dezimaltrennzeichen akzeptiert.',
    scales: {
      intl: {
        thousand: 'Tausend',
        million: 'Million',
        billion: 'Milliarde',
        trillion: 'Billion',
        quadrillion: 'Billiarde',
        quintillion: 'Trillion',
      },
      indian: {
        lakh: 'lakh',
        crore: 'crore',
        arab: 'arab',
        kharab: 'kharab',
        neel: 'neel',
        padma: 'padma',
        shankh: 'shankh',
      },
    },
  },

  pt: {
    localeCode: 'pt',
    numberLocale: 'pt-PT',
    initialAmount: '1',
    tabs: {
      aria: 'Modo do conversor',
      bases: 'Bases 2–36',
      naming: 'Indiano ⇄ Internacional',
    },
    eyebrow: 'Lakh, crore, milhão e bilhão',
    heading: 'Converta entre o sistema indiano e o internacional',
    amount: 'Quantidade',
    from: 'De',
    to: 'Para',
    swap: 'Trocar as escalas de origem e destino',
    converted: 'Valor convertido',
    tryLabel: 'Experimente:',
    error: 'Introduza um número válido.',
    errorLarge: 'O número é demasiado grande. Introduza um valor mais pequeno.',
    representations: 'Todas as representações indianas',
    allIntlReps: 'Todas as representações internacionais',
    allIndianReps: 'Todas as representações indianas',
    bestFit: 'Melhor representação',
    intl: 'Internacional',
    indian: 'Indiano',
    intlSystem: 'Sistema internacional',
    indianSystem: 'Sistema indiano',
    copy: 'Copiar',
    copied: 'Copiado',
    copyValueAria: 'Copiar o valor convertido',
    copyIntlAria: 'Copiar o número internacional',
    copyIndianAria: 'Copiar o número indiano',
    footnote:
      'O cálculo é feito no navegador. Aceita vírgula ou ponto como separador decimal.',
    scales: {
      intl: {
        thousand: 'mil',
        million: 'milhão',
        billion: 'mil milhões (PT) / bilhão (BR)',
        trillion: 'bilião (PT) / trilhão (BR)',
        quadrillion: 'mil biliões (PT) / quatrilhão (BR)',
        quintillion: 'trilião (PT) / quintilhão (BR)',
      },
      indian: {
        lakh: 'lakh',
        crore: 'crore',
        arab: 'arab',
        kharab: 'kharab',
        neel: 'neel',
        padma: 'padma',
        shankh: 'shankh',
      },
    },
  },

  it: {
    localeCode: 'it',
    numberLocale: 'it-IT',
    initialAmount: '1',
    tabs: {
      aria: 'Modalità del convertitore',
      bases: 'Basi 2–36',
      naming: 'Indiano ⇄ Internazionale',
    },
    eyebrow: 'Lakh, crore, milione e bilione',
    heading: 'Converti tra il sistema indiano e quello internazionale',
    amount: 'Importo',
    from: 'Da',
    to: 'A',
    swap: 'Inverti le scale di partenza e di arrivo',
    converted: 'Valore convertito',
    tryLabel: 'Prova:',
    error: 'Inserisci un numero valido.',
    errorLarge: 'Il numero è troppo grande. Inserisci un valore più piccolo.',
    representations: 'Tutte le rappresentazioni indiane',
    allIntlReps: 'Tutte le rappresentazioni internazionali',
    allIndianReps: 'Tutte le rappresentazioni indiane',
    bestFit: 'Migliore rappresentazione',
    intl: 'Internazionale',
    indian: 'Indiano',
    intlSystem: 'Sistema internazionale',
    indianSystem: 'Sistema indiano',
    copy: 'Copia',
    copied: 'Copiato',
    copyValueAria: 'Copia il valore convertito',
    copyIntlAria: 'Copia il numero internazionale',
    copyIndianAria: 'Copia il numero indiano',
    footnote:
      'Il calcolo avviene nel browser. Sono accettati sia la virgola sia il punto come separatore decimale.',
    scales: {
      intl: {
        thousand: 'mille',
        million: 'milione',
        billion: 'miliardo',
        trillion: 'bilione',
        quadrillion: 'mille bilioni',
        quintillion: 'trilione',
      },
      indian: {
        lakh: 'lakh',
        crore: 'crore',
        arab: 'arab',
        kharab: 'kharab',
        neel: 'neel',
        padma: 'padma',
        shankh: 'shankh',
      },
    },
  },
};
