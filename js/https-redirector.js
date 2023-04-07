if (window.location.protocol == 'http:') {
    console.log("Redirecting to HTTPS...")
    window.location.href = window.location.href.replace('http:', 'https:')
}else if(window.location.protocol == "https:") {
    console.log("HTTPS detected");
}