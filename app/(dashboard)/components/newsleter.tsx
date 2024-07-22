import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const FormSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Podaj adres E-mai",
    })
    .email({
      message: "Niepoprawny adres E-mail",
    }),
})

const Newsletter = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {}
  return (
    <div className="my-7 lg:my-0">
      <h3 className="text-2xl my-4 lg:my-0 font-semibold">
        Zapisz się do newslettera
      </h3>
      <p className="text-[#878787] my-7">
        Nie wysyłamy często wiadomości, nie będziemy cię denerwować{" "}
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="bg-purple text-white mt-5 px-9 py-6 font-bold"
            type="submit"
          >
            Potwierdź
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default Newsletter
