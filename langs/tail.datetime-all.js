/*
 |  tail.datetime - A vanilla JavaScript DateTime Picker without dependencies!
 |  @file       ./langs/tail.datetime-all.js
 |  @author     SamBrishes <sam@pytes.net>
 |  @version    0.4.12 - Beta
 |
 |  @website    https://github.com/pytesNET/tail.DateTime
 |  @license    X11 / MIT License
 |  @copyright  Copyright © 2018 - 2019 SamBrishes, pytesNET <info@pytes.net>
 */
;(function(factory){
   if(typeof(define) == "function" && define.amd){
       define(function(){
           return function(datetime){ factory(datetime); };
       });
   } else {
       if(typeof(window.tail) != "undefined" && window.tail.DateTime){
           factory(window.tail.DateTime);
       }
   }
}(function(datetime){
    /*
     |  Translator:     Mohammed Alsiddeeq Ahmed - (https://github.com/mosid)
     |  GitHub:         https://github.com/pytesNET/tail.DateTime/issues/1
     */
    datetime.strings.register("ar", {
        months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
        days:   ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
        shorts: ["أحد", "إثن", "ثلا", "أرب", "خمي", "جمع", "سبت"],
        time:   ["ساعة", "دقيقة", "ثانية"],
        header: ["إختر الشهر", "إخنر السنة", "إختر العقد", "إختر الوقت"]
    });

    /*
     |  Translator:     SamBrishes - (https://www.pytes.net)
     |  GitHub:         <internal>
     */
    datetime.strings.register("de", {
        months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        days:   ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        shorts: ["SO", "MO", "DI", "MI", "DO", "FR", "SA"],
        time:   ["Stunden", "Minuten", "Sekunden"],
        header: ["Wähle einen Monat", "Wähle ein Jahr", "Wähle ein Jahrzehnt", "Wähle eine Uhrzeit"]
    });

    /*
     |  Translator:     SamBrishes - (https://www.pytes.net)
     |  GitHub:         <internal>
     */
    datetime.strings.register("de_AT", {
        months: ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
        days:   ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        shorts: ["SO", "MO", "DI", "MI", "DO", "FR", "SA"],
        time:   ["Stunden", "Minuten", "Sekunden"],
        header: ["Wähle einen Monat", "Wähle ein Jahr", "Wähle ein Jahrzehnt", "Wähle eine Uhrzeit"]
    });

    /*
     |  Translator:     SamBrishes - (https://www.pytes.net)
     |  GitHub:         <internal>
     */
    datetime.strings.register("es", {
        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        days:   ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        shorts: ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"],
        time:   ["Horas", "Minutos", "Segundos"],
        header: ["Selecciona un mes", "Seleccione un año", "Seleccione un década", "Seleccione una hora"]
    });

    /*
     |  Translator:     noxludio - (https://github.com/noxludio)
     |  GitHub:         https://github.com/pytesNET/tail.DateTime/pull/17
     */
    datetime.strings.register("fi", {
        months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
        days:   ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"],
        shorts: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
        time:   ["Tunnit", "Minuutit", "Sekuntit"],
        header: ["Valitse kuukausi", "Valitse vuosi", "Valitse vuosikymmen", "Valitse aika"]
    });

    /*
     |  Translator:     FlashPanther - (https://github.com/FlashPanther)
     |  GitHub:         https://github.com/pytesNET/tail.DateTime/pull/19
     */
    datetime.strings.register("fr", {
        months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        days:   ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
        shorts: ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"],
        time:   ["Heure", "Minute", "Seconde"],
        header: ["Choisissez un mois", "Choisissez une année", "Choisissez une décénie", "Kies een Tijdstip"]
    });

    /*
     |  Translator:     Fabio Di Stasio - (https://github.com/Fabio286)
     |  GitHub:         https://github.com/pytesNET/tail.DateTime/issues/10
     */
    datetime.strings.register("it", {
        months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
        days:   ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
        shorts: ["DOM", "LUN", "MAR", "MER", "GIO", "VEN", "SAB"],
        time:   ["Ore", "Minuti", "Secondi"],
        header: ["Seleziona un mese", "Seleziona un anno", "Seleziona un decennio", "Seleziona un orario"]
    });

    /*
     |  Translator:     Mickeybyte - (https://github.com/mickeybyte)
     |  GitHub:         <internal>
     */
    datetime.strings.register("nl", {
        months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
        days:   ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
        shorts: ["ZO", "MA", "DI", "WO", "DO", "VR", "ZA"],
        time:   ["Uur", "Minuten", "Seconden"],
        header: ["Kies een Maand", "Kies een Jaar", "Kies een Decennium", "Kies een Tijdstip"]
    });

    /*
     |  Translator:     Lars Athle Larsen - (https://github.com/larsathle)
     |  GitHub:         https://github.com/pytesNET/tail.DateTime/pull/31
     */
    datetime.strings.register("no", {
        months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
        days:   ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
        shorts: ["SØN", "MAN", "TIR", "ONS", "TOR", "FRE", "LØR"],
        time:   ["Timer", "Minutter", "Sekunder"],
        header: ["Velg måned", "Velg år", "Velg tiår", "Velg klokkeslett"]
    });
    
    /*
     |  Translator:     Jacob273 - (https://github.com/Jacob273)
     |  GitHub:         https://github.com/pytesNET/tail.DateTime/pull/32
     */
    datetime.strings.register("pl", {
        months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
        days:   ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
        shorts: ["ND", "PN", "WT", "ŚR", "CZW", "PT", "SOB"],
        time:   ["Godzina", "Minuta", "Sekunda"],
        header: ["Wybierz miesiąc", "Wybierz rok", "Wybierz dekadę", "Wybierz czas"]
    });

    /*
     |  Translator:     Júnior Garcia - (https://github.com/juniorgarcia)
     |  GitHub:         https://github.com/pytesNET/tail.DateTime/issues/13
     */
    datetime.strings.register("pt_BR", {
        months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        days:   ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        shorts: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        time:   ["Horas", "Minutos", "Segundos"],
        header: ["Escolha um mês", "Escolha um ano", "Escolha uma década", "Escolha um horário"]
    });

    /*
     |  Translator:     SamBrishes - (https://www.pytes.net)
     |  GitHub:         <internal>
     */
    datetime.strings.register("ru", {
        months: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
        days:   ["воскресенье", "понедельник", "вторник", "среда","четверг","пятница","суббота",],
        shorts: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
        time:   ["часов", "минут", "секунд"],
        header: ["Выберите месяц", "Выберите год", "Выберите Десятилетие", "Выберите время"]
    });

    /*
     |  Translator:     Murat Pala - (https://github.com/Prozexis)
     |  GitHub:         https://github.com/pytesNET/tail.DateTime/pull/30
     */
    datetime.strings.register("tr", {
        months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        days:   ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
        shorts: ["PA", "PT", "SA", "ÇA", "PE", "CU", "CT"],
        time:   ["Saat", "Dakika", "Saniye"],
        header: ["Ay Seçin", "Yıl Seçin", "On Yıl Seçin", "Zaman Seçin"]
    });
    return datetime;
}));
