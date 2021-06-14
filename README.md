# k6-setup-centos-action

This action provides the following functionality for GitHub Actions runners:
- Downloading and setting up [k6](https://k6.io/docs/getting-started/installation/#fedora-centos) for rpm-based ones like Fedora and CentOS


## Usage

```yaml
steps:
  - name: Install K6
    uses: LedgerHQ/k6-install-action@v2
```
