// PRE-LOADER

if (!sessionStorage.getItem('doNotShow')) {
    sessionStorage.setItem('doNotShow', true);
    $('.preloader').delay(1000).fadeOut('slow');
} else {
    $('.preloader').hide();
}
