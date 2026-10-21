import { api } from "../../../lib/axios";
import type { SpotDTO } from "../dtos/spot.dto";

const ENDPOINT = '/spots';

export const SpotService = {
  
    async listAll(): Promise<SpotDTO[]> {
        const result = await api.get(ENDPOINT);
        return result.data;    
    },

    async findOne(id: string): Promise<SpotDTO[]> {
        const result = await api.get(`${ENDPOINT}/${id}`);
        return result.data;    
    }

};