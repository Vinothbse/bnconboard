import { WalletConnectOptions, WalletModule } from '../../../interfaces';
declare function trustWallet(options: WalletConnectOptions & {
    networkId: number;
}): WalletModule;
export default trustWallet;
