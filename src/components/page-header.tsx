interface PageHeaderProps {
  title: string;
  icon?: string;
}

export default function PageHeader({ icon, title }: PageHeaderProps) {
  return (
    <div className="flex items-center gap-x-2">
      {icon && <img className="size-8" src={icon} alt={`${title}-icon`} />}
      <h2 className="h2-bold">{title}</h2>
    </div>
  );
}
