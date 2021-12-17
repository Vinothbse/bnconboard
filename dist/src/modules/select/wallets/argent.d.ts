import { WalletConnectOptions, WalletModule } from '../../../interfaces';
declare function argent(options: WalletConnectOptions & {
    networkId: number;
}): WalletModule;
export default argent;
