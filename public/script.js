

document.addEventListener('DOMContentLoaded', e => {
    e.preventDefault()

    // Side elements
    const sideimg1 = document.getElementById('side-image-1')
    const currentside = document.getElementById('current-side')
    const sideimg2 = document.getElementById('side-image-2')
    const sideimg3 = document.getElementById('side-image-3')

    const img1side = document.getElementById('side-image-1-img')
    const img2side = document.getElementById('side-image-2-img')
    const img3side = document.getElementById('side-image-3-img')
    
    // channel elements
    const general = document.getElementById('general-channel')
    const duo = document.getElementById('duo-channel')
    const ranking = document.getElementById('ranking-channel')
    const survival = document.getElementById('survival-channel')

    const gtext = document.getElementById('g-text')
    const dtext = document.getElementById('d-text')
    const rtext = document.getElementById('r-text')
    const stext = document.getElementById('s-text')


    // click side icons
    sideimg1.addEventListener('click', e => {
        e.preventDefault()
        
        sideimg1.insertBefore(currentside, img1side)
    })

    sideimg2.addEventListener('click', e => {
        e.preventDefault()
        
        sideimg2.insertBefore(currentside, img2side)
    })

    sideimg3.addEventListener('click', e => {
        e.preventDefault()
        
        sideimg3.insertBefore(currentside, img3side)
    })

    // click channels

    general.addEventListener('click', e => {
        e.preventDefault()
        general.classList.add('bg-[#393C43]')
        duo.classList.remove('bg-[#393C43]')
        ranking.classList.remove('bg-[#393C43]')
        survival.classList.remove('bg-[#393C43]')
        gtext.classList.add('text-white')
        dtext.classList.remove('text-white')
        dtext.classList.add('text-white/25')
        rtext.classList.remove('text-white')
        rtext.classList.add('text-white/25')
        stext.classList.remove('text-white')
        stext.classList.add('text-white/25')
    })

    duo.addEventListener('click', e => {
        e.preventDefault()
        general.classList.remove('bg-[#393C43]')
        duo.classList.add('bg-[#393C43]')
        ranking.classList.remove('bg-[#393C43]')
        survival.classList.remove('bg-[#393C43]')

        gtext.classList.remove('text-white')
        gtext.classList.add('text-white/25')
        dtext.classList.remove('text-white/25')
        dtext.classList.add('text-white')
        rtext.classList.remove('text-white')
        rtext.classList.add('text-white/25')
        stext.classList.remove('text-white')
        stext.classList.add('text-white/25')
    })

    ranking.addEventListener('click', e => {
        e.preventDefault()
        general.classList.remove('bg-[#393C43]')
        duo.classList.remove('bg-[#393C43]')
        ranking.classList.add('bg-[#393C43]')
        survival.classList.remove('bg-[#393C43]')


        gtext.classList.add('text-white/25')
        gtext.classList.remove('text-white')
        dtext.classList.add('text-white/25')
        rtext.classList.remove('text-white/25')
        rtext.classList.add('text-white')
        stext.classList.remove('text-white')
        stext.classList.add('text-white/25')
    })

    survival.addEventListener('click', e => {
        e.preventDefault()
        general.classList.remove('bg-[#393C43]')
        duo.classList.remove('bg-[#393C43]')
        ranking.classList.remove('bg-[#393C43]')
        survival.classList.add('bg-[#393C43]')

        gtext.classList.add('text-white/25')
        gtext.classList.remove('text-white')
        dtext.classList.add('text-white/25')
        rtext.classList.add('text-white/25')
        rtext.classList.remove('text-white')
        stext.classList.add('text-white')
        stext.classList.remove('text-white/25')
    })

    
})