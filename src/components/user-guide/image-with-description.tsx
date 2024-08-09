/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

const ImageWithDescription = ({
    url,
    description,
}: {
    url: string
    description: string
}) => {
    return (
        <div className="mb-4">
            <img
                alt={description}
                src={url}
                width={160}
                height={400}
                className="border border-solid border-ultmtblue rounded self-center mb-2"
            />
            <span className="text-gray-300 text-sm">{description}</span>
        </div>
    )
}

export default ImageWithDescription
