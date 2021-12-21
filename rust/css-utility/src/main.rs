use structopt::StructOpt;
/// Search for a pattern in a file and display the lines that contain it.
#[derive(StructOpt)]
struct Cli {
    #[structopt(short = "c", long = "create")]
    create: String,
}

fn main() {
    let args = Cli::from_args();

    print!(" El proyecto a crear se llamara : \"{}\"", args.create);
}
