'use client';

import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "../ui/modal";


export const StoreModal = () => {
    const storeModal = useStoreModal();
    return (
        <Modal title="Buat Toko" description="Tambahkan toko untuk menambahkan produk dan kategori" isOpen={storeModal.isOpen} onClose={storeModal.onClose}>
            Store Form
        </Modal>
    )
}