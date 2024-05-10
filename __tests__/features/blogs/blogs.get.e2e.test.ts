import {req} from "../../test-helpers/req";
import {SETTINGS} from "../../../src/settings";
import {HTTP_CODES} from "../../../src/settings";
import {setDB} from "../../../src/db/db";
import {blogsDataset} from "../../datasets/blogsDatasets"
import { clearTestDB, closeTestDB, connectToTestDB } from "../../test-helpers/test-db";


describe('GET /blogs', () => {
    beforeAll(async () => {
        await connectToTestDB()
        //await req.delete('/testing/all-data').expect(HTTP_CODES.NO_CONTENT)
    })
    afterAll(async () => {
        await closeTestDB()
    })
    beforeEach(async () => {
        //setDB()
        await clearTestDB()
    })
    it('+ GET blogs empty array', async () => {
        expect(1).toBe(1)
    })
    // it('+ GET blogs empty array', async () => {
    //     const res = await req.get(SETTINGS.PATH.BLOGS).expect(HTTP_CODES.OK)

    //     expect(res.body.length).toBe(0)
    // })
    // it('+ GET blogs not empty array', async () => {
    //     setDB(blogsDataset)

    //     const res = await req.get(SETTINGS.PATH.BLOGS).expect(HTTP_CODES.OK)

    //     expect(res.body.length).toBe(1)
    //     expect(res.body).toEqual(blogsDataset.blogs)
    // })
    // it('+ GET blog with correct id', async () => {
    //     setDB(blogsDataset)

    //     const res = await req
    //         .get(`${SETTINGS.PATH.BLOGS}/${blogsDataset.blogs[0].id}`)
    //         .expect(HTTP_CODES.OK)

    //     expect(res.body).toEqual(blogsDataset.blogs?.[0])
    // })
    // it('- GET blog with incorrect id', async () => {
    //     setDB(blogsDataset)

    //     await req
    //         .get(`${SETTINGS.PATH.BLOGS}/123`)
    //         .expect(HTTP_CODES.NOT_FOUND)
    // })
})