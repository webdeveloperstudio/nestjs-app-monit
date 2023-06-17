export class CreateLoggerDto {
    public SoftwareName: string;
    public message: string;
    public level: string;
    public timestamp: Date;
    public context: string;
    public url: string;
    public params: string;
    public host: string;
}
