import { expectAssignable } from 'tsd'
import Undici, {Pool, Client, errors, fetch, Interceptable, RedirectHandler, DecoratorHandler, Headers, Response, Request, FormData, File, FileReader} from '../..'
import Dispatcher from "../../types/dispatcher";

expectAssignable<Pool>(new Undici.Pool('', {}))
expectAssignable<Client>(new Undici.Client('', {}))
expectAssignable<Interceptable>(new Undici.MockAgent().get(''))
expectAssignable<typeof errors>(Undici.errors)
expectAssignable<typeof fetch>(Undici.fetch)
expectAssignable<typeof Headers>(Undici.Headers)
expectAssignable<typeof Response>(Undici.Response)
expectAssignable<typeof Request>(Undici.Request)
expectAssignable<typeof FormData>(Undici.FormData)
expectAssignable<typeof File>(Undici.File)
expectAssignable<typeof FileReader>(Undici.FileReader)

const client = new Undici.Client('', {})
const handler: Dispatcher.DispatchHandlers =  {}

expectAssignable<RedirectHandler>(new Undici.RedirectHandler(client, 10, {
  path: '/', method: 'GET'
}, handler))
expectAssignable<DecoratorHandler>(new Undici.DecoratorHandler(handler))
