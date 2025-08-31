import React, {type ReactNode} from 'react';

import styles from './message-box.module.scss';
import classNames from "classnames";

interface MessageBoxProps {
    children: ReactNode;
    className?: string;
}

const MessageBox: React.FunctionComponent<MessageBoxProps> = (props) => {
    const { children, className } = props;

    return (
        <div className={classNames(styles.messageBox, className)}>
            { children }
        </div>
    );
};

export default MessageBox;
