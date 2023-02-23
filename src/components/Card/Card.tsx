import styles from './Card.module.css'
type cardProps = {
    title: string,
    description: string
}
function Card(props: cardProps) {
    const { title, description } = props
    return (
        <div className=" rounded-xl overflow-hidden shadow-lg m-2 sm:m-0">
            <img
                className="w-full"
                src="/images/home.jpeg"
                alt="Sunset in the mountains"
            />
            <div className="px-3 sm:px-2 md:px-3 lg:px-6 xl:px-6 py-2 md:py-2 lg:py-3 xl:py-4 rounded-xl bg-white relative -mt-4">
                <div className='flex justify-between'>
                    <p className={`font-bold text-sm md:text-base xl:text-lg text text-xl ${styles.card_description}`}>{title}</p>
                    <button className='bg-green-500 p-1 px-2 h-7 rounded'><img src='/images/right-arrow.png' className={styles.button_img} alt='' /></button>
                </div>
                <p className={`text-gray-700 text-xs md:text-sm lg:text-base ${styles.card_description}`}>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Card
