"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import nProgress from "nprogress";

// Form validation guide
const formSchema = z.object({
  search: z.string().trim().min(2).max(50),
});

const SearchForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  useEffect(() => {
    nProgress.done();
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="flex">
              <FormControl>
                <Input
                  placeholder="Search"
                  {...field}
                  className="border-2 rounded-3xl focus-visible:!border-[var(--purple-500)] active:border-[var(--purple-500)]"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchForm;
