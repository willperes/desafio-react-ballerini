import { Button } from "./styles";

interface CustomButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

export function CustomButton({ children, onClick, className }: CustomButtonProps) {
    return (
        <Button onClick={onClick} className={className}>
            {children}
        </Button>
    );
}