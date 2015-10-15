angular.module('myApp')
	.factory('languageFactory', [function(){

var languageList = {
  "Afrikaans": "af",
  "Albanian": "sq",
  "Arabic": "ar",
  "Armenian": "hy",
  "Azerbaijani": "az",
  "Basque": "eu",
  "Belarusian": "be",
  "Bengali": "bn",
  "Bosnian": "bs",
  "Bulgarian": "bg",
  "Catalan": "ca",
  "Cebuano": "ceb",
  "Chichewa": "ny",
  "Chinese Simplified": "zh-CN",
  "Chinese Traditional": "zh-TW",
  "Croatian": "hr",
  "Czech": "cs",
  "Danish": "da",
  "Dutch": "nl",
  "English": "en",
  "Esperanto": "eo",
  "Estonian": "et",
  "Filipino": "tl",
  "Finnish": "fi",
  "French": "fr",
  "Galician": "gl",
  "Georgian": "ka",
  "German": "de",
  "Greek": "el",
  "Gujarati": "gu",
  "Haitian Creole": "ht",
  "Hausa": "ha",
  "Hebrew": "iw",
  "Hindi": "hi",
  "Hmong": "hmn",
  "Hungarian": "hu",
  "Icelandic": "is",
  "Igbo": "ig",
  "Indonesian": "id",
  "Irish": "ga",
  "Italian": "it",
  "Japanese": "ja",
  "Javanese": "jw",
  "Kannada": "kn",
  "Kazakh": "kk",
  "Khmer": "km",
  "Korean": "ko",
  "Lao": "lo",
  "Latin": "la",
  "Latvian": "lv",
  "Lithuanian": "lt",
  "Macedonian": "mk",
  "Malagasy": "mg",
  "Malay": "ms",
  "Malayalam": "ml",
  "Maltese": "mt",
  "Maori": "mi",
  "Marathi": "mr",
  "Mongolian": "mn",
  "Myanmar (Burmese)": "my",
  "Nepali": "ne",
  "Norwegian": "no",
  "Persian": "fa",
  "Polish": "pl",
  "Portuguese": "pt",
  "Punjabi": "ma",
  "Romanian": "ro",
  "Russian": "ru",
  "Serbian": "sr",
  "Sesotho": "st",
  "Sinhala": "si",
  "Slovak": "sk",
  "Slovenian": "sl",
  "Somali": "so",
  "Spanish": "es",
  "Sudanese": "su",
  "Swahili": "sw",
  "Swedish": "sv",
  "Tajik": "tg",
  "Tamil": "ta",
  "Telugu": "te",
  "Thai": "th",
  "Turkish": "tr",
  "Ukrainian": "uk",
  "Urdu": "ur",
  "Uzbek": "uz",
  "Vietnamese": "vi",
  "Welsh": "cy",
  "Yiddish": "yi",
  "Yoruba": "yo",
  "Zulu": "zu"
}
 
/**
     * Build `languages` list of key/value pairs
     As expected by the autocomplete directive
*/
var languageDisplay = []
for (var language in languageList) {
      languageDisplay.push({
          value   : language.toLowerCase(),
          display : language,
          abbrev  : languageList[language],
      })
}

var translationRequest = {
  word   : '',
  from   : '',
  to     : '',
  result : '',
}


			return {
				languageList        : languageList,
        languageDisplay     : languageDisplay,
        translationRequest  : translationRequest,
			}
}])
