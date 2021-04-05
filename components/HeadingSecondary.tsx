interface HeadingProps {
    text     : string;
    fix_skew?: boolean;
    white?   : boolean;
    font?    : string;
}

const HeadingSecondary = ( { text, fix_skew, white, font }: HeadingProps ): JSX.Element => {
    return (
        <>
            <div className={`${ fix_skew ? 'heading-secondary--fix-skew ' : ''} u-center-text`}>
                <h2 className={ `heading-secondary ${ white ? 'heading-secondary--white' : ''}` }
                    style={{ fontFamily: font }}
                >
                    { text }
                </h2>
            </div>

            <style jsx>{`
                @import 'styles/sass/abstracts/_variables';
                @import 'styles/sass/abstracts/_mixins';
                @import 'styles/sass/base/_utilities';

                .heading-secondary {
                    background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
                    background-clip: text;
                    -webkit-background-clip: text;
                    color: transparent;
                    display: inline-block;
                    font-family: Montserrat, sans-serif;
                    font-size: 3.5rem;
                    font-weight: 700;
                    letter-spacing: 1rem;
                    margin-bottom: 8rem;
                    text-align: center;
                    text-transform: uppercase;

                    @include respond(tab-port) {
                        margin-bottom: 5rem !important;
                    }

                    &--fix-skew {
                        transform: skewY( 3deg );
                    }

                    &--white {
                        color: white;
                    }

                    @include respond(tab-port) {
                        font-size: 3rem;
                    }

                    @include respond(phone) {
                        font-size: 2.5rem;
                    }
                }
            `}</style>
        </>
    )
}

export default HeadingSecondary;
