let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('navbar a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = secoffheight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(
                links => {
                    links.classlist.remove('active');
                    document.querySelector('hader nav a[href*=' + id + ']').classlist.add('active');
                }
            )
        }
    })
}