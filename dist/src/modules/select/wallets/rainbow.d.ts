import { WalletConnectOptions, WalletModule } from '../../../interfaces';
declare function rainbow(options: WalletConnectOptions & {
    networkId: number;
}): WalletModule;
export default rainbow;
