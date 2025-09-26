interface HeadingProps {
    title: string;
    description?: string;
}

export const Heading: React.FC<HeadingProps> = ({
    title,
    description
}) => {
    return (
        <div>
            <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
    )
}