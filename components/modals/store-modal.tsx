"use client";

import * as z from "zod";
import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "../ui/modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  name: z.string().min(1),
});

export const StoreModal = () => {
  const storeModal = useStoreModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Modal
      title="Buat Toko"
      description="Tambahkan toko untuk menambahkan produk dan kategori"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
            <Form {...form}>
                <form action="" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField 
                    control={form.control}
                    name='name'
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Nama Toko</FormLabel>
                            <FormControl>
                                <Input placeholder="Nama Toko" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                    <div className="pt-6 flex justify-end space-x-2">
                        <Button variant="outline" onClick={storeModal.onClose}>Cancel</Button>
                        <Button typeof="submit">Continue</Button>
                    </div>
                </form>
            </Form>
        </div>
      </div>
    </Modal>
  );
};
