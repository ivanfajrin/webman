const links = [

    { url: 'https://www.google.com', text: 'Google' },
    { url: 'https://www.facebook.com', text: 'Facebook' },
    { url: 'https://www.twitter.com', text: 'Twitter' },
    { url: 'https://www.linkedin.com', text: 'LinkedIn' },
    { url: 'https://www.github.com', text: 'GitHub' },
    { url: 'https://www.instagram.com', text: 'Instagram' },
    { url: 'https://www.youtube.com', text: 'YouTube' },
    { url: 'https://www.whatsapp.com', text: 'WhatsApp' },
    { url: 'https://www.pinterest.com', text: 'Pinterest' },
    { url: 'https://www.zoom.us', text: 'Zoom' },
    { url: 'https://chat.openai.com', text: 'ChatGPT' },
    { url: 'https://www.google.com', text: 'Google Search' },
    { url: 'https://mail.google.com', text: 'Gmail' },
    { url: 'https://www.google.com/drive/', text: 'Google Drive' },
    { url: 'https://www.google.com/calendar', text: 'Google Calendar' },
    { url: 'https://www.google.com/maps', text: 'Google Maps' },
    { url: 'https://www.google.com/photos', text: 'Google Photos' },
    { url: 'https://news.google.com', text: 'Google News' },
    { url: 'https://translate.google.com', text: 'Google Translate' },
    { url: 'https://docs.google.com', text: 'Google Docs' },
    { url: 'https://sheets.google.com', text: 'Google Sheets' },
    { url: 'https://slides.google.com', text: 'Google Slides' },
    { url: 'https://meet.google.com', text: 'Google Meet' },
    { url: 'https://play.google.com', text: 'Google Play' },
    { url: 'https://books.google.com', text: 'Google Books' },

    // Microsoft services
    { url: 'https://www.microsoft.com', text: 'Microsoft' },
    { url: 'https://www.office.com', text: 'Microsoft Office' },
    { url: 'https://outlook.live.com', text: 'Outlook' },
    { url: 'https://www.onedrive.com', text: 'OneDrive' },
    { url: 'https://www.skype.com', text: 'Skype' },
    { url: 'https://www.teams.microsoft.com', text: 'Microsoft Teams' },
    { url: 'https://www.microsoft.com/en-us/edge', text: 'Microsoft Edge' },
    { url: 'https://www.bing.com', text: 'Bing' },
    { url: 'https://www.xbox.com', text: 'Xbox' },
    { url: 'https://www.azure.microsoft.com', text: 'Microsoft Azure' },
    { url: 'https://www.microsoft.com/en-us/windows', text: 'Windows' },
    { url: 'https://docs.microsoft.com', text: 'Microsoft Docs' },
    { url: 'https://forms.office.com', text: 'Microsoft Forms' },
    { url: 'https://www.microsoft.com/en-us/learn', text: 'Microsoft Learn' },
    //collection
	{ url: 'https://ukin-ukpppg.bppp.kemdikbud.go.id/', text: 'UKPPPG Kemdikbud' },
    { url: 'https://ninite.com/', text: 'Ninite' },
    { url: 'https://akupintar.id/info-pintar/-/blogs/magnet-pengertian-sifat-jenis-dan-bentuk-magnet', text: 'Aku Pintar - Magnet' },
    { url: 'https://kusonime.com/spy-kyoushitsu-batch-subtitle-indonesia/', text: 'Kusonime - Spy Kyoushitsu' },
    { url: 'https://aicomicfactory.com/playground', text: 'AI Comic Factory' },
    { url: 'https://www.educaplay.com/', text: 'Educaplay' },
    { url: 'https://www.dora.run/ai', text: 'Dora AI' },
    { url: 'https://www.studyfetch.com/id/platform?justLoggedIn=true', text: 'StudyFetch' },
    { url: 'https://id.elsevier.com/', text: 'Elsevier' },
    { url: 'https://www.figma.com/', text: 'Figma' },
    { url: 'https://app.formulabot.com/', text: 'FormulaBot' },
    // AI tools
    { url: 'https://zapier.com', text: 'Zapier' },
    { url: 'https://www.make.com', text: 'Make' },
    { url: 'https://www.bardeen.ai', text: 'Bardeen' },
    { url: 'https://bard.google.com', text: 'Google Bard' },
    { url: 'https://gemini.com', text: 'Gemini' },
    { url: 'https://copilot.microsoft.com', text: 'Copilot X' },
    { url: 'https://www.askcodi.com', text: 'AskCodi' },
    { url: 'https://aws.amazon.com', text: 'AWS' },
    { url: 'https://aws.amazon.com/codewhisperer', text: 'Code Whisperer' },
    { url: 'https://www.syllaby.io', text: 'Syllaby' },
    { url: 'https://www.midjourney.com', text: 'MidJourney' },
    { url: 'https://www.cohesive.so', text: 'Cohesive' },
    { url: 'https://www.synthesia.io', text: 'Synthesia' },
    { url: 'https://www.adobe.com/sensei/generative-ai/firefly.html', text: 'Adobe Firefly' },
    { url: 'https://designer.microsoft.com', text: 'Microsoft Designer' },
    { url: 'https://www.tome.app', text: 'Tome' },
    { url: 'https://www.decktopus.com', text: 'Decktopus' },
    { url: 'https://www.gamma.app', text: 'Gamma' },
    { url: 'https://www.notion.so/product/ai', text: 'Notion AI' },
    { url: 'https://www.taskade.com', text: 'Taskade' },
    { url: 'https://meetgeek.ai', text: 'MeetGeek' },
    { url: 'https://www.runwayml.com', text: 'Runway' },
    { url: 'https://pictory.ai', text: 'Pictory' },
    { url: 'https://www.descript.com', text: 'Descript' },
    { url: 'https://www.10web.io', text: '10Web' },
    { url: 'https://durable.co', text: 'Durable' },
    { url: 'https://imagica.ai', text: 'Imagica' }
];

// Fungsi untuk mengurutkan berdasarkan jumlah klik yang tersimpan di Local Storage
function getClickCount(linkText) {
    return parseInt(localStorage.getItem(linkText)) || 0;
}

// Urutkan tautan berdasarkan klik yang tersimpan
function sortLinksByClicks() {
    return links.sort((a, b) => getClickCount(b.text) - getClickCount(a.text));
}

// Fungsi untuk menambah klik ke Local Storage
function incrementClickCount(linkText) {
    const currentCount = getClickCount(linkText);
    localStorage.setItem(linkText, currentCount + 1);
}
