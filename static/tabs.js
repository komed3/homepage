document.addEventListener( 'DOMContentLoaded', () => {

    const btns = document.querySelectorAll( '.tabs button' );
    const tabs = document.querySelectorAll( '.projects .item' );

    const fade = ( el, show ) => {

        el.style.transition = 'opacity 200ms';

        if ( show ) {

            el.style.display = '';
            el.style.opacity = 0;

            setTimeout( () => el.style.opacity = 1, 10 );

        } else {

            el.style.opacity = 0;

            setTimeout( () => el.style.display = 'none', 200 );

        }

    };

    btns.forEach( btn => btn.addEventListener( 'click', () => {

        btns.forEach( b => b.classList.remove( 'active' ) );
        btn.classList.add( 'active' );

        const keys = ( btn.getAttribute( 'key' ) || '' ).trim().split( /\s+/ ).filter( Boolean );

        tabs.forEach( tab => {

            const match = ! keys.length || keys.some( k => tab.classList.contains( k ) );

            if ( match && tab.style.display === 'none' ) fade( tab, true );
            else if ( ! match && tab.style.display !== 'none' ) fade( tab, false );
            else if ( match ) { tab.style.display = ''; tab.style.opacity = 1; }

        } );

    } ) );

} );