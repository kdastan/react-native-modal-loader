declare module 'react-native-modal-loader' {
    interface LoaderInterface {
        loading: boolean,
        color?: string;
        size?: number;
        opacity?: number;
        title?: string;
    }

    const Loader: (props: LoaderInterface) => any;
    export default Loader;

}
