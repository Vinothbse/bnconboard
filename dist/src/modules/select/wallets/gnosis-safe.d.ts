import { WalletConnectOptions, WalletModule } from '../../../interfaces';
declare function gnosisSafe(options: WalletConnectOptions & {
    networkId: number;
}): WalletModule;
export default gnosisSafe;
