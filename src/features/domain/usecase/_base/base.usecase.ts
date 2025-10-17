export abstract class BaseUseCase<Input extends any[], Output> {
    async execute(...args: Input): Promise<Output> {
        try {
            return await this.run(...args);
        } catch (error: any) {
            if (error.name === 'BusinessError') {
                return this.handleBusinessError(error);
            } else {
                return this.handleUnexpectedError(error);
            }
        }
    }

    protected abstract run(...args: Input): Promise<Output>;

    protected abstract handleBusinessError(error: any): Output;

    protected abstract handleUnexpectedError(error: any): Output;
} 