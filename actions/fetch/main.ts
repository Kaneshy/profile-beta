'use server'
import { connectToDB } from "@/lib/mongoose.js";
import BadgeGroup from "../../lib/models/badget";
import StickerGroup from "../../lib/models/stickers";



export const fetchOneBadget = async (id:string) => {
    await connectToDB()
    try {

        console.log('Running query');
        const badgetsGroup = await StickerGroup.findById(id).sort({ updatedAt: -1 }).lean(); // Use .lean() to get plain JS objects


        console.log(0, badgetsGroup);
        console.log(30, JSON.parse(JSON.stringify(badgetsGroup)));
        return JSON.parse(JSON.stringify(badgetsGroup)); // Return plain, serialized data

    } catch (error) {
        console.error('Error adding badges:', error);
        return null;
    }
};



export const fetchAllGroupBadgets = async () => {
    await connectToDB()
    try {

        console.log('Running query');
        const badgetsGroup = await BadgeGroup.find({ privacy: 'public' }).sort({ updatedAt: -1 }).lean(); // Use .lean() to get plain JS objects

        // Transform each book document to ensure _id and date fields are plain values
        // const badgetsGroupTransformed = badgetsGroup.map(badgets => ({
        //     ...badgets,
        //     _id: badgets._id.toString(), // Convert ObjectId to string
        //     createdAt: badgets.createdAt ? badgets.createdAt.toISOString() : null, // Convert Date to string
        //     updatedAt: badgets.updatedAt ? badgets.updatedAt.toISOString() : null // Convert Date to string
        // }));

        console.log(0, badgetsGroup);
        console.log(30, JSON.parse(JSON.stringify(badgetsGroup)));
        return JSON.parse(JSON.stringify(badgetsGroup)); // Return plain, serialized data

    } catch (error) {
        console.error('Error adding badges:', error);
        return null;
    }
};

export const fetchAllGroupStickers = async () => {
    await connectToDB()
    try {

        console.log('Running query');
        const badgetsGroup = await BadgeGroup.find({ privacy: 'private' }).sort({ updatedAt: -1 }).lean(); // Use .lean() to get plain JS objects

        // Transform each book document to ensure _id and date fields are plain values
        // const badgetsGroupTransformed = badgetsGroup.map(badgets => ({
        //     ...badgets,
        //     _id: badgets._id.toString(), // Convert ObjectId to string
        //     createdAt: badgets.createdAt ? badgets.createdAt.toISOString() : null, // Convert Date to string
        //     updatedAt: badgets.updatedAt ? badgets.updatedAt.toISOString() : null // Convert Date to string
        // }));

        console.log(0, badgetsGroup);
        console.log(30, JSON.parse(JSON.stringify(badgetsGroup)));
        return JSON.parse(JSON.stringify(badgetsGroup)); // Return plain, serialized data

    } catch (error) {
        console.error('Error adding badges:', error);
        return null;
    }
};

export const fetchAllGroupFrames = async () => {
    await connectToDB()
    try {

        console.log('Running query');
        const badgetsGroup = await BadgeGroup.find({ privacy: 'frame' }).sort({ updatedAt: -1 }).lean(); // Use .lean() to get plain JS objects

        // Transform each book document to ensure _id and date fields are plain values
        // const badgetsGroupTransformed = badgetsGroup.map(badgets => ({
        //     ...badgets,
        //     _id: badgets._id.toString(), // Convert ObjectId to string
        //     createdAt: badgets.createdAt ? badgets.createdAt.toISOString() : null, // Convert Date to string
        //     updatedAt: badgets.updatedAt ? badgets.updatedAt.toISOString() : null // Convert Date to string
        // }));

        console.log(0, badgetsGroup);
        console.log(30, JSON.parse(JSON.stringify(badgetsGroup)));
        return JSON.parse(JSON.stringify(badgetsGroup)); // Return plain, serialized data

    } catch (error) {
        console.error('Error adding badges:', error);
        return null;
    }
};

export const fetchAllSections = async () => {
    await connectToDB()
    try {

        const badgetsGroup = await StickerGroup.find().sort({ updatedAt: -1 }).lean(); // Use .lean() to get plain JS objects


        // const resData = await fetchsectionBadgets(badgetsGroup[0])
        // const dataAA = {
        //     group: badgetsGroup,
        //     badgetsA: resData
        // }

        return JSON.parse(JSON.stringify(badgetsGroup)); // Return plain, serialized data

    } catch (error) {
        console.error('Error adding badges:', error);
        return null;
    }
};


interface Badge {
    _id: string;
    name: string;
    desc: string;
    lev: number;
    img: string;
}

interface Item {
    _id: string;
    name: string;
    badgets?: Badge[]; // Use optional chaining if badgets can be undefined
}


export const fetchsectionBadgets = async (datafetched: Item) => {

    await connectToDB();
    try {

        if (!datafetched?.badgets?.length) {
            console.log("No badges to fetch.");
            return []; // Return an empty array if there are no badges
        }
        
        const results = await Promise.all(
            datafetched?.badgets.map(async (x) => {
                console.log(x._id); // Log each badge's _id

                // Fetch related badge groups
                const result = await BadgeGroup.findOne({
                    badgets: { $elemMatch: { _id: x._id } } // Assuming x contains id_badget
                }, {
                    'badgets.$': 1 // Only return the matching badge in the badgets array
                })
                    .sort({ updatedAt: -1 })
                    .lean(); // Get plain JS objects
                console.log(5656, result.badgets[0])
                return result; // Return the fetched results
            })
        );
        console.log(8788, results)
        return JSON.parse(JSON.stringify(results)); // Return plain, serialized data
    } catch (error) {
        console.error('Error fetching badges:', error);
        return null;
    }


};


