

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

    const plusside = document.getElementById('plus-side-img')
    const cside = document.getElementById('c-side-img')
    // channel elements
    const general = document.getElementById('general-channel')
    const duo = document.getElementById('duo-channel')
    const ranking = document.getElementById('ranking-channel')
    const survival = document.getElementById('survival-channel')

    const gtext = document.getElementById('g-text')
    const dtext = document.getElementById('d-text')
    const rtext = document.getElementById('r-text')
    const stext = document.getElementById('s-text')

    //2side

    const pwindow = document.getElementById('personal-window') 
    const mic = document.getElementById('mic') 
    const headph = document.getElementById('headphone')
    const setting = document.getElementById('set')

    // chat window

    const ring = document.getElementById('ring')
    const pin = document.getElementById('pin')
    const people = document.getElementById('people')

    const pluschat = document.getElementById('plus-chat')
    const giftchat = document.getElementById('gift-chat')
    const gifchat = document.getElementById('gif-chat')
    const smilechat = document.getElementById('smile-chat')

    // rightside
    const mention = document.getElementById('mention')
    const sup = document.getElementById('support')

    mention.addEventListener('click', e => {
        e.preventDefault()

        mention.classList.add('animate-[spin_1s_ease-in-out_2]')

        setTimeout(() => {
            mention.classList.remove('animate-[spin_1s_ease_1s_ease-in-out_2]')
        }, 2000)
    })

    sup.addEventListener('click', e => {
        e.preventDefault()

        sup.classList.add('animate-[spin_1s_ease-in-out_2]')

        setTimeout(() => {
            sup.classList.remove('animate-[spin_1s_ease_1s_ease-in-out_2]')
        }, 2000)
    })


    giftchat.addEventListener('click', e => {
        e.preventDefault()

        giftchat.classList.add('animate-[ping_1s_ease-in-out_2]')

        setTimeout(() => {
            giftchat.classList.remove('animate-[ping_1s_ease_1s_ease-in-out_2]')
        }, 2000)
    })

    gifchat.addEventListener('click', e => {
        e.preventDefault()

        gifchat.classList.add('animate-[ping_1s_ease-in-out_2]')

        setTimeout(() => {
            gifchat.classList.remove('animate-[ping_1s_ease_1s_ease-in-out_2]')
        }, 2000)
    })

    smilechat.addEventListener('click', e => {
        e.preventDefault()

        smilechat.classList.add('animate-[ping_1s_ease-in-out_2]')

        setTimeout(() => {
            smilechat.classList.remove('animate-[ping_1s_ease_1s_ease-in-out_2]')
        }, 2000)
    })
    
    pluschat.addEventListener('click', e => {
        e.preventDefault()

        pluschat.classList.add('animate-[spin_1s_ease-in-out_2]')

        setTimeout(() => {
            pluschat.classList.remove('animate-[spin_1s_ease-in-out_2]')
        }, 2000)
    })

    ring.addEventListener('click', e => {
        e.preventDefault()

        ring.classList.add('animate-[spin_1s_ease-in-out_2]')

        setTimeout(() => {
            ring.classList.remove('animate-[spin_1s_ease-in-out_2]')
        }, 2000)
    })

    pin.addEventListener('click', e => {
        e.preventDefault()

        pin.classList.add('animate-[spin_1s_ease-in-out_2]')

        setTimeout(() => {
            pin.classList.remove('animate-[spin_1s_ease-in-out_2]')
        }, 2000)
    })

    people.addEventListener('click', e => {
        e.preventDefault()

        people.classList.add('animate-[spin_1s_ease-in-out_2]')

        setTimeout(() => {
            people.classList.remove('animate-[spin_1s_ease-in-out_2]')
        }, 2000)
    })
    // 2 Side

    pwindow.addEventListener('click', e => {
        e.preventDefault()

        pwindow.classList.add('animate-[bounce_0.5s_ease-in-out_1]')

        setTimeout(() => {
            pwindow.classList.remove('animate-[bounce_0.5s_ease-in-out_1]')
        }, 1000)
    })

    mic.addEventListener('click', e => {
        e.preventDefault()
        mic.classList.add('animate-[pulse_1s_ease-in-out_3]')
        setTimeout(() => {
            mic.classList.remove('animate-[pulse_1s_ease-in-out_3]')
        }, 2000)
    })

    headph.addEventListener('click', e => {
        e.preventDefault()
        headph.classList.add('animate-[pulse_1s_ease-in-out_3]')
        setTimeout(() => {
            headph.classList.remove('animate-[pulse_1s_ease-in-out_3]')
        }, 2000)
    })

    setting.addEventListener('click', e => {
        e.preventDefault()
        setting.classList.add('animate-[pulse_1s_ease-in-out_3]')
        setTimeout(() => {
            setting.classList.remove('animate-[pulse_1s_ease-in-out_3]')
        }, 2000)
    })

    // click side icons
    sideimg1.addEventListener('click', e => {
        e.preventDefault()
        img1side.classList.add('animate-[spin_1s_ease-in-out_3]')
        setTimeout(() => {
            img1side.classList.remove('animate-[spin_1s_ease-in-out_3]')
        }, 2000)
        sideimg1.insertBefore(currentside, img1side)
    })

    sideimg2.addEventListener('click', e => {
        e.preventDefault()
        img2side.classList.add('animate-[spin_1s_ease-in-out_3]')
        setTimeout(() => {
            img2side.classList.remove('animate-[spin_1s_ease-in-out_3]')
        }, 2000)
        sideimg2.insertBefore(currentside, img2side)
    })

    sideimg3.addEventListener('click', e => {
        e.preventDefault()
        img3side.classList.add('animate-[spin_1s_ease-in-out_3]')
        setTimeout(() => {
            img3side.classList.remove('animate-[spin_1s_ease-in-out_3]')
        }, 2000)
        sideimg3.insertBefore(currentside, img3side)
    })

    plusside.addEventListener('click', e => {
        e.preventDefault()
        plusside.classList.add('animate-[ping_1s_ease-in-out_3]')
        setTimeout(() => {
            plusside.classList.remove('animate-[ping_1s_ease-in-out_3]')
        }, 2000)
    })

    cside.addEventListener('click', e => {
        e.preventDefault()
        cside.classList.add('animate-[ping_1s_ease-in-out_3]')
        setTimeout(() => {
            cside.classList.remove('animate-[ping_1s_ease-in-out_3]')
        }, 2000)
    })

    // click channels

    general.addEventListener('click', e => {
        e.preventDefault()
        general.classList.add('bg-[#393C43]')
        duo.classList.remove('bg-[#393C43]')
        ranking.classList.remove('bg-[#393C43]')
        survival.classList.remove('bg-[#393C43]')

        gtext.classList.add('text-white')
        gtext.classList.remove('text-white/25')
        dtext.classList.remove('text-white')
        dtext.classList.add('text-white/25')
        rtext.classList.remove('text-white')
        rtext.classList.add('text-white/25')
        stext.classList.remove('text-white')
        stext.classList.add('text-white/25')

        general.classList.add('animate-[bounce_1s_ease-in-out_2]')
        duo.classList.remove('animate-[bounce_1s_ease-in-out_2]')
        ranking.classList.remove('animate-[bounce_1s_ease-in-out_2]')
        survival.classList.remove('animate-[bounce_1s_ease-in-out_2]')
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

        duo.classList.add('animate-[bounce_1s_ease-in-out_2]')
        general.classList.remove('animate-[bounce_1s_ease-in-out_2]')
        ranking.classList.remove('animate-[bounce_1s_ease-in-out_2]')
        survival.classList.remove('animate-[bounce_1s_ease-in-out_2]')
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

        ranking.classList.add('animate-[bounce_1s_ease-in-out_2]')
        general.classList.remove('animate-[bounce_1s_ease-in-out_2]')
        duo.classList.remove('animate-[bounce_1s_ease-in-out_2]')
        survival.classList.remove('animate-[bounce_1s_ease-in-out_2]')
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

        survival.classList.add('animate-[bounce_1s_ease-in-out_2]')
        general.classList.remove('animate-[bounce_1s_ease-in-out_2]')
        ranking.classList.remove('animate-[bounce_1s_ease-in-out_2]')
        duo.classList.remove('animate-[bounce_1s_ease-in-out_2]')
    })

    
})