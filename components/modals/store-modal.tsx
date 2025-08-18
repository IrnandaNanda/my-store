"use client";

import * as z from "zod";
import axios from "axios";

import { useState } from "react";
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
  const [loading, setLoading] = useState(false);

  const storeModal = useStoreModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      const response = await axios.post("/api/stores", values);
      // window.location.assign(`/${response.data.id}`)
      console.log(response.data);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
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
                                <Input disabled={loading} placeholder="Nama Toko" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                    <div className="pt-6 flex justify-end space-x-2">
                        <Button disabled={loading} variant="outline" onClick={storeModal.onClose}>Cancel</Button>
                        <Button disabled={loading} typeof="submit">Continue</Button>
                    </div>
                </form>
            </Form>
        </div>
      </div>
    </Modal>
  );
};
