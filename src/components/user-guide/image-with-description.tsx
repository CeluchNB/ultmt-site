import Image from 'next/image'

const ImageWithDescription = ({
    url,
    description,
}: {
    url: string
    description: string
}) => {
    return (
        <>
            <Image
                alt="Filled in create account screen"
                src={url}
                width={160}
                height={400}
                className="border border-solid border-ultmtblue rounded self-center"
            />
            <span className="text-gray-300">{description}</span>
        </>
    )
}

export default ImageWithDescription
