import { forwardRef } from "react";
import { animated, useSpring } from "react-spring";

interface FadeProps {
    children?: React.ReactElement;
    in: boolean;
    onEnter?: () => {};
    onExited?: () => {};
}

export const MenuFade = forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0, top: '-10rem' },
        to: { opacity: open ? 1 : 0, top: open ? '0' : '-10rem' },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} className="menu-modal" {...other}>
            {children}
        </animated.div>
    );
});