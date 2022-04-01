import { ToastController } from "@ionic/angular";

export default class Utils {
    toastController: ToastController

    constructor(toastController: ToastController) {
        this.toastController = toastController
    }

    async toast(message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000,
            position: "top"
        });
        toast.present();
    }
}