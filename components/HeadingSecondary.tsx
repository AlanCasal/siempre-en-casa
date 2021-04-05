interface HeadingProps {
    text: string;
}

const HeadingSecondary = ( { text }: HeadingProps ): JSX.Element => {
    return (
        <>
            <div className='heading-secondary-wrapper'>
                <h2 className='heading-secondary-wrapper__h2'>
                    { text }
                </h2>
            </div>

            <style jsx>{`
                @import 'styles/sass/abstracts/_variables';
                @import 'styles/sass/base/_utilities';

                .heading-secondary-wrapper {
                    text-align: center;

                    &__h2 {
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
                    }
                }
            `}</style>
        </>
    )
}

export default HeadingSecondary;
