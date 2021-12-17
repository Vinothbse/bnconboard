import { WalletConnectOptions, WalletModule } from '../../../interfaces';
declare function valora(options: WalletConnectOptions & {
    networkId: number;
}): WalletModule;
export default valora;
