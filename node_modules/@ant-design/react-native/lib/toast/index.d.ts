interface IToastConfigurable {
    duration?: number;
    onClose?: () => void;
    mask?: boolean;
    stackable?: boolean;
}
interface IToastProps extends IToastConfigurable {
    content: string;
}
declare function removeAll(): void;
declare const _default: {
    SHORT: number;
    LONG: number;
    defaultConfig: IToastConfigurable;
    getConfig: () => {
        duration?: number | undefined;
        onClose?: (() => void) | undefined;
        mask?: boolean | undefined;
        stackable?: boolean | undefined;
    };
    config(props: IToastConfigurable): void;
    /**
     * @deprecated use Toast.info instead
     */
    show(props: string | IToastProps, duration?: number | undefined, mask?: boolean | undefined): number;
    /**
     *
     * @param props: toast props
     * @deprecated duration: use props instead
     * @deprecated onClose: use props instead
     * @deprecated mask: use props instead
     */
    info(props: string | IToastProps, duration?: number | undefined, onClose?: (() => void) | undefined, mask?: boolean | undefined): number;
    /**
     *
     * @param props: toast props
     * @deprecated duration: use props instead
     * @deprecated onClose: use props instead
     * @deprecated mask: use props instead
     */
    success(props: string | IToastProps, duration?: number | undefined, onClose?: (() => void) | undefined, mask?: boolean | undefined): number;
    /**
     *
     * @param props: toast props
     * @deprecated duration: use props instead
     * @deprecated onClose: use props instead
     * @deprecated mask: use props instead
     */
    fail(props: string | IToastProps, duration?: number | undefined, onClose?: (() => void) | undefined, mask?: boolean | undefined): number;
    /**
     *
     * @param props: toast props
     * @deprecated duration: use props instead
     * @deprecated onClose: use props instead
     * @deprecated mask: use props instead
     */
    offline(props: string | IToastProps, duration?: number | undefined, onClose?: (() => void) | undefined, mask?: boolean | undefined): number;
    /**
     *
     * @param props: toast props
     * @deprecated duration: use props instead
     * @deprecated onClose: use props instead
     * @deprecated mask: use props instead
     */
    loading(props: string | IToastProps, duration?: number | undefined, onClose?: (() => void) | undefined, mask?: boolean | undefined): number;
    remove(key: number): void;
    removeAll: typeof removeAll;
};
export default _default;
