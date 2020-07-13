

const chat = {
  1: {
    text: 'Hallo, kennst Du #WirLernenonline schon?',
    options: [
      {
        text: 'Noch fast gar nicht. Erzähle mir davon!',
        next: 2
      },
      {
        text: 'Ein bißchen. Ich habe eine konkrete Frage dazu.',
        next: 13
      }
    ]
  },
  
 2: {
        text: '#WirLernenOnline ist eine Suchmaschine für freie Bildungsmaterialien.',
        next: 3
    },
  
  
  3: {
    text: 'Bei uns finden Lehrkräfte, Schüler:innen und Eltern Inhalte, Tools und Methoden zum Lehren und Lernen',
    options: [
      {
        text: 'Oh, das will ich direkt ausprobieren.',
        next: 4
      },
      {
        text: "Probiere ich nachher aus. Erzähle mir bitte erst noch, was ich auf #WirLernenOnline sonst noch finde.",
        next: 5
      }
    ]
  },
  
    4: {
    text:
    'Na dann, los!',
    options: [
      {
        text: '🔗 zur Suchmaschine',
        url: 'https://suche.wirlernenonline.de/de/search'
      },
      {
        text: 'Lass uns weiter chatten!',
        next: 5
      }
    ]
  },
  
  5: {
        text: 'Zusätzlich wollen wir auf #WirLernenOnline in Themenportalen die Möglichkeit zum Stöbern und für Austausch bieten.',
        next: 6
    },
  
  6: {
    text: 'Ganz wichtig ist: #WirLernenOnline ist noch im Aufbau. Du kannst mithelfen, es für alle besser zu machen.',
    options: [
      {
        text: 'Wie geht das denn genau?',
        next: 7
      },
      {
        text: 'Mich interessiert erst einmal, wer überhaupt hinter #WirLernenOnline steht.',
        next: 10
      }
    ]
  },
  

      7: {
    text: 'Am einfachsten unterstützt Du uns, wenn Du Fehler meldest, die Dir auf der Seite auffallen. Oder uns Hinweise auf weitere Quellen schickst.',
    options: [
      {
        text: 'Wie kann ich das machen?',
        next: 8
      },
      {
        text: 'Okay. Welche Fragen kannst Du denn sonst noch beantworten?',
        next: 13
      }
    ]
  },
  
  8: {
        text: 'Auf der Website findest Du auf fast jeder Seite den Button Fehler melden oder Problem melden. Nutze ihn, sobald Dir etwas auffällt.',
        next: 9
    },
  
   9: {
    text: 'Daneben gibt es wöchentliche Mitmach-Aktionen, an denen Du Dich beteiligen kannst, wann es für Dich passt.',
   options: [
      {
        text: '🔗 Trage Dich in unseren Newsletter ein, um darüber informiert zu werden.',
        url: 'https://wirlernenonline.de/mitmachen'
      },
      {
        text: 'Ich habe erst noch eine andere Frage.',
        next: 13
      },
      {
        text: 'Danke. Dann weiß ich jetzt genug.',
        next: 12
      }
    ]
  },
  
  10: {
        text: '#WirLernenOnline ist ein gemeinsames Projekt von Wikimedia Deutschland e.V. und edusharing-net e.V.',
        next: 11
    },
  
  11: {
    text: 'Es wird im Rahmen eines Covid19-Nothilfe-Programms des Bundesministeriums für Bildung und Forschung (BMBF) gefördert.',
    options: [
      {
        text: 'Danke. Damit weiß ich erst einmal genug',
        next: 12
      },
      {
        text: 'Welche Fragen kannst Du denn sonst noch beantworten?',
        next: 13
      }
    ]
  },
  
   13: {
    text: 'Wähle Deine Frage aus:',
    options: [
      {
        text: 'Wie kann ich bei #WirLernenOnline mitmachen?',
        next: 7
      },
      {
        text: 'Wer steht hinter #WirLernenOnline?',
        next: 10
      },
       {
        text: 'Was meint ihr mit freier Bildung?',
        next: 16
      },
      {
        text: 'Nö, ich will etwas anderes wissen.',
        next: 14
      }
    ]
  },

  16: {
    text: 'Mit freier Bildung meinen wir Materialien, die für Bildungszwecke frei genutzt werden können. Viele der Materialien sind Open Educational Resources (OER)',
    options: [
      {
        text: 'Und was sind OER?',
        next: 17
      },
      {
        text: 'Danke. Dann habe ich noch eine Frage',
        next: 13
      }
 ]
  },
  
  
  
  17: {
        text: 'OER sind offene Bildungsmaterialien. Du kannst sie nicht nur abrufen, sondern zugleich für Deine Lernsituation anpassen und weiter verbreiten.',
        next: 18
    },
  
  
  18: {
    text: 'Ermöglicht wird das durch Veröffentlichung unter einer offenen Lizenz.',
    options: [
      {
        text: 'Das klingt spannend. Kannst Du mir das genauer erklären?',
        next: 19
      },
      {
        text: "Danke. Jetzt möchte ich noch etwas anderes fragen.",
        next: 13
      }
    ]
  },
  
    19: {
    text:
    'Klar, wir haben dazu einen Blogbeitrag veröffentlicht. Da steht alles drin.',
    options: [
      {
        text: '🔗 zum Blogbeitrag',
        url: 'https://wirlernenonline.de/faq-wie-funktioniert-oer/'
      },
      {
        text: 'Lass uns weiter chatten!',
        next: 13
      }
    ]
  },
  
   14: {
    text: 'Dann lass uns besser direkt sprechen',
    options: [
      {
        text: 'Okay, schlaue Idee. Und wie?',
        next: 15
      },
      {
        text: 'Ich versuche es doch nochmal mit den möglichen Fragen hier.',
        next: 13
      }
    ]
  },
  
   15: {
    text:
    'Du erreichst uns über verschiedene Wege:',
    options: [
      {
        text: '🔗 über unseren Twitter-Account',
        url: 'https://twitter.com/wirlernenonline'
      },
      {
        text: '🔗 per Mail',
        url: 'mailto:dialog@wirlernenonline'
      },
      {
        text: '🔗 per Kontaktformular auf der Website',
        url: 'https://wirlernenonline.de/kontakt/'
      },
      { text: 'Ich will doch erst noch weiter chatten', next: 13 }
    ]
  },
  
  12: {
    text: 'Gerne. Wenn Du weiter chatten willst, weißt Du ja wo Du mich findest',
    options: [
      {
        text: 'Tschüß',
      }
    ]
  },
};
